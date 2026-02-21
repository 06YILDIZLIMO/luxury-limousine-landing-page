import { NextRequest, NextResponse } from 'next/server';
import { updateAgent, LIMOUSINE_SYSTEM_PROMPT, AGENT_ID } from '@/lib/elevenlabs';

// POST /api/elevenlabs/agent - Update the ElevenLabs agent with limousine service prompt
export async function POST(request: NextRequest) {
  try {
    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: 'ElevenLabs is not configured (missing ELEVENLABS_API_KEY).',
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { prompt, name, modelId } = body;

    // Use provided prompt or fallback to limousine service prompt
    const newPrompt = prompt || LIMOUSINE_SYSTEM_PROMPT;

    console.log(`Updating ElevenLabs agent ${AGENT_ID}...`);

    const updatedAgent = await updateAgent(AGENT_ID, {
      name: name || "06YILDIZ LIMO Receptionist",
      prompt: newPrompt,
      modelId: modelId || "eleven_flash_v2_5",
    });

    return NextResponse.json({
      success: true,
      message: "Agent updated successfully",
      agent: {
        id: (updatedAgent as any).agentId || (updatedAgent as any).agent_id,
        name: updatedAgent.name,
        updated_at: (updatedAgent as any).updatedAt || (updatedAgent as any).updated_at,
      },
    });
  } catch (error) {
    console.error("Error updating ElevenLabs agent:", error);

    if (error instanceof Error && error.message === 'ELEVENLABS_API_KEY not configured') {
      return NextResponse.json(
        { success: false, error: 'ElevenLabs is not configured (missing ELEVENLABS_API_KEY).' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to update agent",
      },
      { status: 500 }
    );
  }
}

// GET /api/elevenlabs/agent - Get current agent details
export async function GET() {
  try {
    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: 'ElevenLabs is not configured (missing ELEVENLABS_API_KEY).',
        },
        { status: 503 }
      );
    }

    const { getAgent } = await import('@/lib/elevenlabs');
    const agent = await getAgent(AGENT_ID);

    return NextResponse.json({
      success: true,
      agent: {
        id: (agent as any).agentId || (agent as any).agent_id,
        name: agent.name,
        model_id: (agent as any).modelId || (agent as any).model_id,
        created_at: (agent as any).createdAt || (agent as any).created_at,
        updated_at: (agent as any).updatedAt || (agent as any).updated_at,
      },
    });
  } catch (error) {
    console.error("Error fetching ElevenLabs agent:", error);

    if (error instanceof Error && error.message === 'ELEVENLABS_API_KEY not configured') {
      return NextResponse.json(
        { success: false, error: 'ElevenLabs is not configured (missing ELEVENLABS_API_KEY).' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch agent",
      },
      { status: 500 }
    );
  }
}
