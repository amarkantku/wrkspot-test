import HttpClient from '../helpers/HttpClient';
import { Country } from '../types/Country';

class CountryListService {
  public async fetchCountries(): Promise<Country[]> {
    try {
      const countries = await HttpClient.get<Country[]>('/countries/countries');
      return countries;
    } catch (error: any) {
      throw error;
    }
  }
}

const countryListService = new CountryListService();
export default countryListService;
