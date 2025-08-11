import { z } from 'zod';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const configSchema = z.object({
  // Server
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Database
  DATABASE_URL: z.string().optional(),
  
  // Redis
  REDIS_URL: z.string().default('redis://localhost:6379'),
  
  // JWT
  JWT_SECRET: z.string().default('your-super-secret-jwt-key-change-this-in-production'),
  JWT_EXPIRES_IN: z.string().default('7d'),
  
  // Stripe
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  
  // Email
  EMAIL_PROVIDER: z.enum(['sendgrid', 'ses']).default('sendgrid'),
  SENDGRID_API_KEY: z.string().optional(),
  FROM_EMAIL: z.string().email().default('noreply@yourapp.com'),
  
  // SMS
  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),
  TWILIO_PHONE_NUMBER: z.string().optional(),
  
  // Push
  FCM_SERVER_KEY: z.string().optional(),
  
  // Logging
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  
  // Rate Limiting
  RATE_LIMIT_MAX: z.coerce.number().default(100),
  RATE_LIMIT_WINDOW: z.string().default('15m'),
});

export type Config = z.infer<typeof configSchema>;

// Parse and validate environment variables
let config: Config;

try {
  config = configSchema.parse(process.env);
} catch (error) {
  console.error('❌ Invalid environment variables:', error);
  process.exit(1);
}

// Log configuration in development
if (config.NODE_ENV === 'development') {
  console.log('🔧 Configuration loaded:', {
    NODE_ENV: config.NODE_ENV,
    PORT: config.PORT,
    DATABASE_URL: config.DATABASE_URL ? '***configured***' : 'not set',
    REDIS_URL: config.REDIS_URL,
    JWT_SECRET: config.JWT_SECRET ? '***configured***' : 'using default',
  });
}

export { config };
export default config;