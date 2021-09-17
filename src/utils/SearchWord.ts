import axios from "axios";
import * as cheerio from "cheerio";
import Config from "../config";
import { readFileSync } from "fs";
import { join } from 'path';
import { IArti, IResponseObj } from "../interfaces/KBBI";

export const SearchWord = async (word: string) => {
  try {
    // const htmlData = readFileSync(join(__dirname, '../../htmlsample/', `/kata-${word}.html`));
    const htmlData: any = await fetchHtml(word);
    const $ = cheerio.load(htmlData);

    let dataResponse: Array<IResponseObj> = [];

    $(".body-content > h4:contains('Pesan')").nextAll().each(function() {
      $(this).remove();
    });

    for (let i = 0; i < $(".body-content > h2").length; i++) {
      let lema = $(".body-content > h2").eq(i).text().trim();
      let kelas_kata = "";
      let deskripsi = "";
      let arti: IArti[] = [];

      const list = $(".body-content > h2")
        .eq(i)
        .nextAll("ul, ol")
        .first()
        .find("li");
      
      if (list.length === 0) continue;

      for (let j = 0; j < list.length; j++) {
        kelas_kata = "";
        for (let k = 0; k < list.eq(j).find("span").length; k++) {
          let getAttributeTitle = list.eq(j).find("span").eq(k).attr("title");
          kelas_kata += `${list
            .eq(j)
            .find("span")
            .eq(k)
            .text()}[${getAttributeTitle}] `;
          list.eq(j).find("span").eq(k).empty();
        }

        deskripsi = list
          .eq(j)
          .html()
          .replace(/<(?:.|\n)*?>/gm, "")
          .replace(/\n/g, "")
          .trim();

        arti[j] = {
          kelas_kata: kelas_kata.trim(),
          deskripsi,
        };
      }

      dataResponse[i] = {
        lema,
        arti
      };  
    }

    if (dataResponse.length < 1) return false;
    return dataResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

const fetchHtml = async (word: string) => {
  try {
    const { data } = await axios.get(`${Config.kbbiUrl}/${word}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}