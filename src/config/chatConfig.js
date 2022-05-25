import { RealtimeClient } from '@supabase/realtime-js';
import { config } from 'dotenv';

config();

const socket = new RealtimeClient(
  process.env.REALTIME_URL,
  {
    params: {
      apikey: process.env.SUPABASE_JWT,
    }
  }
)
socket.connect()

const channel = socket.channel('realtime:public:rls_table', { user_token: process.env.SUPABASE_JWT })
channel.on('INSERT', msg => {
  console.log(msg)
})
channel
  .subscribe()
  .receive('ok', () => console.log('Connected!'))

// Set the JWT so Realtime can verify and keep the channel alive
socket.setAuth(process.env.SUPABASE_JWT)

// Call setAuth again when there's a new valid JWT (e.g. refreshed JWT)
//socket.setAuth(REFRESHED_JWT)

