import "dotenv/config";

const Config = {
  kbbiUrl: "https://kbbi.kemdikbud.go.id/entri",
  baseUrl: process.env.BASE_URL || "http://localhost:5000",
};

export default Config;
