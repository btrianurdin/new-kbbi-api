# New KBBI API (Scraper)
Rest API untuk Kamus Besar Bahasa Indonesia (KBBI) yang bangun dengan NodeJS, Cheerio dan Typescript. 

Api ini dilengkapi dengan **Lema**, **Kelas Kata**, dan **Deskripsi (arti)**.


## Dokumentasi
**Base Url** : 
```
https://new-kbbi-api.herokuapp.com
``` 
**Endpoint** : 
```
/cari/[kosa kata]
```

### Pengunaan
- Contoh *Request*
  ```
    GET https://new-kbbi-api.herokuapp.com/cari/demokrasi
  ```
- Contoh *Response*
  ```json
  {
    "status": true,
    "message": "success",
    "data": [
      {
        "lema": "de.mo.kra.si /démokrasi/",
        "arti": [
          {
            "kelas_kata": "n[Nomina: kata benda] Pol[Politik dan Pemerintahan: -]",
            "deskripsi": "(bentuk atau sistem) pemerintahan yang seluruh rakyatnya turut serta memerintah dengan perantaraan wakilnya; pemerintahan rakyat"
          },
          {
            "kelas_kata": "n[Nomina: kata benda] Pol[Politik dan Pemerintahan: -]",
            "deskripsi":"gagasan atau pandangan hidup yang mengutamakan persamaan hak dan kewajiban serta perlakuan yang sama bagi semua warga negara"
          }
        ]
      }
    ]
  }
  ```
---
Di bangun dengan ❤️ oleh [@btrianurdin](https://twitter.com/btrianurdin)