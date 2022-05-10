import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailServices {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(username: string, emailuser: string, code: String) {

    await this.mailerService.sendMail({
      to: emailuser,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Gracias por registrate en FastPizza',
      template: 'confirmation',
      context: { 
        name: username,
        code: code
      },
    });
  }
}