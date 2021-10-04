export interface CurrentWeather {
    weather: Array<Weather>
    main: {
        temp: number,
        humidity: number
    }
    wind: {
        speed: number
        deg: number
    }
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Weather {
    description: string
}