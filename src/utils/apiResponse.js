export const successResponse = (data, status = 200) => {
  return new Response(JSON.stringify({ success: true, data }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const errorResponse = (message, status = 500) => {
  return new Response(JSON.stringify({ success: false, error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
};

export const validateRequest = async (request, requiredFields = []) => {
  try {
    const body = await request.json();

    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    return { isValid: true, body };
  } catch (error) {
    if (error.message.includes('Missing required fields')) {
      return { isValid: false, error: error.message };
    }
    return { isValid: false, error: 'Invalid request body' };
  }
};