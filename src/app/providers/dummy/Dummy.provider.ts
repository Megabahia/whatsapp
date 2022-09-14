import { DummyPost } from "./dummy.types";
import axios from "axios";
import { Service } from "typedi";

@Service()
export class DummyProvider {
  host = process.env.DUMMY_API;

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
}
