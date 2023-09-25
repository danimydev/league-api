export class ImagesRepository {
  static getSplash(
    { championName, skin }: { championName: string; skin: string },
  ) {
    const url =
      `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin}.jpg`;
    return {
      type: 'splash',
      image: {
        type: 'image/jpg',
        url,
      },
    };
  }

  static getLoading(
    { championName, skin }: { championName: string; skin: string },
  ) {
    const url =
      `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin}.jpg`;
    return {
      type: 'loading',
      image: {
        type: 'image/jpg',
        url,
      },
    };
  }

  static getSquare({ championName }: { championName: string }) {
    const url =
      `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${championName}.png`;
    return {
      type: 'square',
      image: {
        type: 'image/png',
        url,
      },
    };
  }

  static getIconUrlById(id: string) {
    const url =
      `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${id}.png`;
    return {
      type: 'icon',
      image: {
        type: 'image/png',
        url,
      },
    };
  }

  static getSpellUrlByName(name: string) {
    const url =
      `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${name}.png`;
    return {
      type: 'spell',
      image: {
        type: 'image/png',
        url,
      },
    };
  }
}
