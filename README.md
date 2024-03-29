
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
    "14.1.1"
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
    "de_DE"
  ]
}
```

### Champions

##### all (filters)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `partypes` | `string` | **Optional**. `Mage,Tank` \| `Mage` |
| `version` | `number` | **Optional**. `14.3.1` |
| `lang` | `string` | **Optional**. `en_US` |

```http
GET /champions
HTTP/1.1 200 OK
Content-Type: application/json
{
  "type": "champion",
  "version": "14.3.1",
  "data": [
    {
      "id": "Aatrox",
      "name": "Aatrox",
      "title": "the Darkin Blade",
      "images": {},
      "tags": [
        "Fighter",
        "Tank"
      ],
      "partype": "Blood Well"
    },
    {
      "id": "Ahri",
      "name": "Ahri",
      "title": "the Nine-Tailed Fox",
      "images": {},
      "tags": [
        "Mage",
        "Assassin"
      ],
      "partype": "Mana"
    },
    {
      "id": "Akali",
      "name": "Akali",
      "title": "the Rogue Assassin",
      "images": {},
      "tags": [
        "Assassin"
      ],
      "partype": "Energy"
    }
  ]
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
  "type": "champion",
  "version": "14.3.1",
  "data": {
    "id": "Ezreal",
    "name": "Ezreal",
    "title": "the Prodigal Explorer",
    "images": {},
    "skins": [],
    "lore": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease.",
    "blurb": "A dashing adventurer, unknowingly gifted...",
    "allytips": [],
    "enemyTips": [],
    "tags": [],
    "partype": "Mana",
    "info": {},
    "stats": {},
    "passive": {}
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

### Summoners

##### summoner

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `summonerName`      | `string` | **Required**. `Faker` |
| `region`      | `string` | **Optional**. `LAN1` |

```http
GET /summoners/${summonerName}
HTTP/1.1 200 OK
Content-Type: application/json
{
  "summoner": {
    "id": "*****",
    "accountId": "*****",
    "puuid": "*****",
    "name": "Sneaky",
    "level": 681,
    "profileIcon": {
      "id": "4561",
      "version": "14.3.1",
      "ext": "image/png",
      "url": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/4561.png"
    }
  }
}
```

##### account

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tag_line`      | `string` | **Required**. `123` |
| `game_name`      | `string` | **Optional**. `Devil Eyes` |

```http
GET /summoners/account/
HTTP/1.1 200 OK
Content-Type: application/json
{
  "account": {
    "puuid": "*****",
    "gameName": "Devil Eyes",
    "tagLine": "123"
  }
}
```

### Images

##### Profile icons

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `version`      | `string` | **Optional**. `14.3.1` |

```http
GET /images/profile-icons
HTTP/1.1 200 OK
Content-Type: application/json
{
  "type": "profileicon",
  "version": "14.3.1",
  "data": [
    {
      "id": 0,
      "image": {
        "ext": "png",
        "url": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/0.png"
      }
    },
    {
      "id": 1,
      "image": {
        "ext": "png",
        "url": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/1.png"
      }
    },
    {
      "id": 2,
      "image": {
        "ext": "png",
        "url": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/2.png"
      }
    }
  ]
}
```
