import { supabase } from "@/lib/firebase"; // Import the Supabase client

// GET: Fetch category by ID or all categories
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      // Fetch specific category by ID
      const { data: categoryData, error: fetchError } = await supabase
        .from('categories')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchError || !categoryData) {
        return new Response(JSON.stringify({ message: "Category not found" }), { status: 404 });
      }

      // Increment view count (if view field exists)
      if (categoryData.view !== undefined) {
        const { error: updateError } = await supabase
          .from('categories')
          .update({ view: (categoryData.view || 0) + 1 })
          .eq('id', id);

        if (updateError) {
          console.error("Error updating view count:", updateError);
        }

        return new Response(JSON.stringify({ id, ...categoryData, view: (categoryData.view || 0) + 1 }), { status: 200 });
      }

      return new Response(JSON.stringify({ id, ...categoryData }), { status: 200 });
    } else {
      // Fetch all categories
      const { data: categories, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        console.error("Error fetching categories:", error);
        return new Response(JSON.stringify([]), { status: 200 });
      }

      return new Response(JSON.stringify(categories || []), { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
  }
}

// POST: Add new category
export async function POST(req) {
  try {
    const data = await req.json();

    // Prepare category data
    const categoryData = {
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { data: insertedCategory, error } = await supabase
      .from('categories')
      .insert([categoryData])
      .select()
      .single();

    if (error) {
      console.error("Error adding category:", error);
      return new Response(JSON.stringify({ error: "Failed to add category" }), { status: 500 });
    }

    return new Response(JSON.stringify({ id: insertedCategory.id, message: "Category added successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error adding category:", error);
    return new Response(JSON.stringify({ error: "Failed to add category" }), { status: 500 });
  }
}

// DELETE: Remove category by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting category:", error);
      return new Response(JSON.stringify({ error: "Failed to delete category" }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Category deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting category:", error);
    return new Response(JSON.stringify({ error: "Failed to delete category" }), { status: 500 });
  }
}

// PUT: Update category by ID
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

    const { data: updatedCategory, error } = await supabase
      .from('categories')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error("Error updating category:", error);
      return new Response(JSON.stringify({ error: "Failed to update category" }), { status: 500 });
    }

    if (!updatedCategory) {
      return new Response(JSON.stringify({ error: "Category not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Category updated successfully", updatedData: updatedCategory }), { status: 200 });
  } catch (error) {
    console.error("Error updating category:", error);
    return new Response(JSON.stringify({ error: "Failed to update category" }), { status: 500 });
  }
}