import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2M1MWYxZGJlY2ZiZGNjYTU1YjhjNzRiNDdkMGQ3NiIsIm5iZiI6MTcyNzc5MjE0My44Nzk5NTQsInN1YiI6IjY2ZmMwMjAxOWIxZjkxMjFhYmQ2NGEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o8klTYX6CTsZG5UTSZKN2VpLixD2NOljBpewenrI4IA",
  },
});

export default instance;
