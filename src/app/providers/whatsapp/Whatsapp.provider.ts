import { DummyPost } from "./whatsapp.types";
import axios from "axios";
import { Service } from "typedi";

@Service()
export class WhatsappProvider {
  host = process.env.WHATSAPP_API;

  async getPost() {
    const url = `${this.host}/posts/1`;
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await axios.get(url, { headers });
      return response.data as DummyPost;
    } catch (error) {
      return null;
    }
  }

  async sendMessage() {
    const url = `${this.host}/108898388507822/messages`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer EAAKQclSMYPQBAIr1ANmr4U3GHyg4ZAt7mnKti2SZAhTXopkrkIKZCw5PpzVOz7Bjo1ltsutHIQ4gWj2BrfvoXUrh3mi5d1IHp1wqsZC2azkWVVXjbnXGYbSAj1aM2XnHUKfNZBeXxcqfYbzrXcZCiOxGRGKwduLfZCSV0wwPzgfLmY7wFQf9WQA0j3oIXkhVh4XSidN72emZCZBURRy4Ena0f4QoY8BxTZBGYZD"
    };
    try {
      const data = {
        messaging_product: "whatsapp",
        to: "593998092279",
        type: "text",
        text: {
          preview_url: false,
          body: "esto es una prueba"
        }
      };
      const response = await axios.post(url, data, { headers });
      console.log("---------------------");
      console.log(response.data);
      return response.data as DummyPost;
    } catch (error: any) {
      console.log("**********************");
      console.log(error.response.data);
      return null;
    }
  }

  async sendTemplate(phone: string) {
    const url = `${this.host}/110087058515036/messages`;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer EAALLDFI0Hd4BAMIhTYCZAQB3rX1fYIHVCYwCvghpM3OLGE7s77TU5Cn233T1T2uAvj0K6W4CHiKshYQ3g07STMegxBcXGT9M6AmAyxOqZA2FoSjVEmZCWru7RPpJ8iqfGmaOBOrt1cwLmtcKmWbiD2NDqsWfiXnhrp3BPlCn8o3SmuRV5Tm`
    };
    try {
      const data = {
        messaging_product: "whatsapp",
        to: phone,
        type: "template",
        template: { "name": "hello_world", "language": { "code": "en_US" } }
      };
      const response = await axios.post(url, data, { headers });
      console.log("---------------------");
      console.log(response.data);
      return response.data as DummyPost;
    } catch (error: any) {
      console.log("**********************");
      console.log(error.response.data);
      return null;
    }
  }
}
