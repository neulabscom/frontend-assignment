import HotelImg from 'Assets/hotel.svg'
import ChurchImg from 'Assets/church.svg'
import GraveyardImg from 'Assets/graveyard.svg'

export const LEVELS_PROPS = {
    hotel: {
      title: 'The Hotel',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      imageProps: {
        caption: 'Livello 1',
        pathImg: HotelImg
      }
    },
    church: {
      title: 'The Church',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      imageProps: {
        caption: 'Livello 2',
        pathImg: ChurchImg
      }
    },
    graveyard: {
      title: 'The Graveyard',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      imageProps: {
        caption: 'Livello 3',
        pathImg: GraveyardImg
      }
    }
  }