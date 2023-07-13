
# league-api

A deno api for fetching league of legends champions, it includes stats, types, general info and multiple images such as miniatures, loading screens and skins.


## Requirements

[deno](https://deno.land/)
## Run Locally

Clone the project

```bash
  git clone https://github.com/thieves-guild/league-api.git
```

Go to the project directory

```bash
  cd league-api
```

Start the server

```bash
  deno task dev
```


## API Reference

#### Get all champions

```http
  GET /champions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `partypes` | `string` | **Optional**. Mage+Tank |

#### Get champion by name

```http
  GET /champions/${championName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `championName`      | `string` | **Required**. Name of champion to fetch |

#### Get champion image

```http
  GET /images/${championName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `championName`      | `string` | **Required**. Name of champion to fetch image |

