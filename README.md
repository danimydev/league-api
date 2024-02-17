
# league-api

A deno api for fetching league of legends champions, it includes stats, types, general info and multiple images such as miniatures, loading screens and skins.


## Requirements

- [deno](https://deno.land/)
- [riot api key](https://developer.riotgames.com/)

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
  deno task start
```

## API Reference

Download postman collection [here]()

### Versions

```http
GET /versions
HTTP/1.1 200 OK
Content-Type: application/json
{
  "versions": [
    "14.3.1",
    "14.2.1",
    "14.1.1",
    ...
  ]
}
```

### Languages

```http
GET /languages
HTTP/1.1 200 OK
Content-Type: application/json
{
  "languages": [
    "en_US",
    "cs_CZ",
    "de_DE",
    ...
  ]
}
```

### Champions

##### all (filters)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `partypes` | `string` | **Optional**. `Mage,Tank` \| `Mage` |
| `version` | `number` | **Optional**. `13.1.1` |
| `lang` | `string` | **Optional**. `en_US` |

```http
GET /champions
HTTP/1.1 200 OK
Content-Type: application/json
{
  "champions": {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "14.3.1",
    "data": {
      "Aatrox": {
        ...
      },
      "Alistar": {
        ...
      },
      "Ezreal": {
        ...
      },
      ...
    }
  }
}
```

##### By name

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `version` | `number` | **Optional**. `14.3.1` |
| `lang` | `string` | **Optional**. `en_US` |

```http
GET /champions/${championName}
HTTP/1.1 200 OK
Content-Type: application/json
{
  "champions": {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "14.3.1",
    "data": {
      "Aatrox": {
        ...
      }
    }
  }
}
```

##### Champion's images

```http
GET /champions/${championName}/images
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `championName`      | `string` | **Required**. `Ezreal` \| `ezreal` |
| `version`      | `string` | **Optional**. `14.3.1` |
| `skin`      | `string` | **Optional**. `0` |

```http
GET /champions/${championName}
HTTP/1.1 200 OK
Content-Type: application/json
{
  "images": {
    "splash": {
      "ext": "image/jpg",
      "url": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg"
    },
    "loading": {
      "ext": "image/jpg",
      "url": "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_0.jpg"
    },
    "square": {
      "ext": "image/png",
      "url": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ezreal.png"
    }
  }
}
```

#### Get summoner by name

```http
GET /summoners/${summonerName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `summonerName`      | `string` | **Required**. Name of summoner to fetch image |

#### Get icon by id

```http
GET /images/icons/${iconId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `iconId`      | `string` | **Required**. icon id to fetch ex. 658, 0, 10 |
