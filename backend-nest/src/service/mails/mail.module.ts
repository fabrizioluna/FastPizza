import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { join } from "path";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailServices } from "./mail.services";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { env } from "process";

@Module({
    imports: [
      MailerModule.forRootAsync({
        imports: [ConfigModule],
        // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
        // or
        useFactory: async (config: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'newsurgens.royale@gmail.com',
            pass: 'ndgyggmtxoykkoxy',
          },
        },
        defaults: {
          from: `"No Reply" <'newsurgens.royale@gmail.com'>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
      }),
    ],
    providers: [MailServices],
    exports: [MailServices], 
  })
  export class MailModule {}