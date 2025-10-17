import { supabase } from "@/lib/supabase";
import { successResponse, errorResponse, validateRequest } from "@/utils/apiResponse";

// Helper function to format game data (snake_case to camelCase)
const formatGameData = (game) => ({
  id: game.id,
  gameTitle: game.gametitle,
  gameUrl: game.gameurl,
  gameImage: game.gameimage,
  gameCategory: game.gamecategory,
  description: game.description,
  metaKeywords: game.metakeywords,
  metaUrl: game.metaurl,
  view: game.view,
  date: game.date,
  created_at: game.created_at,
  updated_at: game.updated_at
});

// Helper function to prepare game data for database (camelCase to snake_case)
const prepareGameData = (data) => ({
  gametitle: data.gameTitle,
  gameurl: data.gameUrl,
  gameimage: data.gameImage,
  gamecategory: data.gameCategory,
  description: data.description,
  metakeywords: data.metaKeywords,
  metaurl: data.metaUrl
});

// GET: Fetch data by ID or title and increment view count
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');

  try {
    if (id || title) {
      // Fetch specific game by ID or title
      let query = supabase.from('games').select('*');

      if (id) {
        query = query.eq('id', id);
      } else if (title) {
        // Decode URL-encoded title and query by game title
        const decodedTitle = decodeURIComponent(title);
        query = query.eq('gametitle', decodedTitle);
      }

      const { data: gameData, error: fetchError } = await query.single();

      if (fetchError || !gameData) {
        return errorResponse('Game not found', 404);
      }

      // Increment view count
      const updateQuery = supabase
        .from('games')
        .update({ view: (gameData.view || 0) + 1 });

      if (id) {
        updateQuery.eq('id', id);
      } else if (title) {
        updateQuery.eq('gametitle', decodeURIComponent(title));
      }

      const { error: updateError } = await updateQuery;

      if (updateError) {
        console.error("Error updating view count:", updateError);
      }

      const formattedGame = formatGameData({ ...gameData, view: (gameData.view || 0) + 1 });
      return successResponse(formattedGame);
    } else {
      // Fetch all games
      const { data: games, error } = await supabase
        .from('games')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error("Error fetching games:", error);
        return errorResponse('Failed to fetch games', 500);
      }

      const formattedGames = games.map(formatGameData);
      return successResponse(formattedGames || []);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return errorResponse('Failed to fetch data', 500);
  }
}

// POST: Add new game
export async function POST(req) {
  try {
    const validation = await validateRequest(req, ['gameTitle', 'gameUrl', 'gameCategory']);
    if (!validation.isValid) {
      return errorResponse(validation.error, 400);
    }

    const { body: data } = validation;

    // Prepare game data
    const gameData = {
      ...prepareGameData(data),
      date: new Date().toISOString(),
      view: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { data: insertedGame, error } = await supabase
      .from('games')
      .insert([gameData])
      .select()
      .single();

    if (error) {
      console.error("Error adding game:", error);
      return errorResponse('Failed to add game', 500);
    }

    return successResponse({ id: insertedGame.id, message: "Game added successfully" });
  } catch (error) {
    console.error("Error adding game:", error);
    return errorResponse('Failed to add game', 500);
  }
}

// DELETE: Remove game by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return errorResponse('ID is required in query parameters', 400);
    }

    const { error } = await supabase
      .from('games')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting game:", error);
      return errorResponse('Failed to delete game', 500);
    }

    return successResponse({ message: "Game deleted successfully" });
  } catch (error) {
    console.error("Error deleting game:", error);
    return errorResponse('Failed to delete game', 500);
  }
}

// PUT: Update game by ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return errorResponse('ID is required in query parameters', 400);
    }

    const validation = await validateRequest(req);
    if (!validation.isValid) {
      return errorResponse(validation.error, 400);
    }

    const { body: data } = validation;

    // Prepare update data
    const updateData = {
      ...prepareGameData(data),
      updated_at: new Date().toISOString()
    };

    const { data: updatedGame, error } = await supabase
      .from('games')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error("Error updating game:", error);
      return errorResponse('Failed to update game', 500);
    }

    if (!updatedGame) {
      return errorResponse('Game not found', 404);
    }

    return successResponse({
      message: "Game updated successfully",
      updatedData: formatGameData(updatedGame)
    });
  } catch (error) {
    console.error("Error updating game:", error);
    return errorResponse('Failed to update game', 500);
  }
}