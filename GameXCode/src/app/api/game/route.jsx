import { supabase } from "@/lib/firebase"; // Import the Supabase client

// GET: Fetch data by ID and increment view count
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      // Fetch specific game by ID
      const { data: gameData, error: fetchError } = await supabase
        .from('games')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchError || !gameData) {
        return new Response(JSON.stringify([]), { status: 404 });
      }

      // Increment view count
      const { error: updateError } = await supabase
        .from('games')
        .update({ view: (gameData.view || 0) + 1 })
        .eq('id', id);

      if (updateError) {
        console.error("Error updating view count:", updateError);
      }

      // Map database field names to expected camelCase names
      const formattedGame = {
        id: gameData.id,
        gameTitle: gameData.gametitle,
        gameUrl: gameData.gameurl,
        gameImage: gameData.gameimage,
        gameCategory: gameData.gamecategory,
        description: gameData.description,
        metaKeywords: gameData.metakeywords,
        metaUrl: gameData.metaurl,
        view: (gameData.view || 0) + 1,
        date: gameData.date,
        created_at: gameData.created_at,
        updated_at: gameData.updated_at
      };

      return new Response(JSON.stringify(formattedGame), { status: 200 });
    } else {
      // Fetch all games
      const { data: games, error } = await supabase
        .from('games')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error("Error fetching games:", error);
        return new Response(JSON.stringify([]), { status: 200 });
      }

      // Map database field names to expected camelCase names
      const formattedGames = games.map(game => ({
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
      }));

      return new Response(JSON.stringify(formattedGames || []), { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
  }
}

// POST: Add new game
export async function POST(req) {
  try {
    const data = await req.json();

    // Prepare game data
    const gameData = {
      ...data,
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
      return new Response(JSON.stringify({ error: "Failed to add game" }), { status: 500 });
    }

    return new Response(JSON.stringify({ id: insertedGame.id, message: "Game added successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error adding game:", error);
    return new Response(JSON.stringify({ error: "Failed to add game" }), { status: 500 });
  }
}

// DELETE: Remove game by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    const { error } = await supabase
      .from('games')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting game:", error);
      return new Response(JSON.stringify({ error: "Failed to delete game" }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Game deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting game:", error);
    return new Response(JSON.stringify({ error: "Failed to delete game" }), { status: 500 });
  }
}

// PUT: Update game by ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const data = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    if (typeof data !== 'object' || data === null) {
      return new Response(JSON.stringify({ error: "Invalid data format" }), { status: 400 });
    }

    // Prepare update data
    const updateData = {
      ...data,
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
      return new Response(JSON.stringify({ error: "Failed to update game" }), { status: 500 });
    }

    if (!updatedGame) {
      return new Response(JSON.stringify({ error: "Game not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Game updated successfully", updatedData: updatedGame }), { status: 200 });
  } catch (error) {
    console.error("Error updating game:", error);
    return new Response(JSON.stringify({ error: "Failed to update game" }), { status: 500 });
  }
}