import React, { useEffect, useState } from 'react';
import {
  CalendarIcon,
  HomeIcon,
  LogoutIcon,
  MovieBoxIcon,
  MoviesIcon,
  StarIcon,
  TvseriesIcon,
  Expand,
} from '../asset/icon';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const [sideNavIndex, setSideNavIndex] = useState(1);
  const params = useParams();
  const movieId = params?.id;
  const movie = movies?.filter((movie) => movie.id === JSON.parse(movieId));

  const [movieDetail, setMovieDetail] = useState({});
  console.log(movieDetail);

  const API_KEY = '574cf5f71934e72f9ea4dae5640ea158';
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  useEffect(() => {
    try {
      const headers = new Headers();
      const requestOptions = {
        method: 'GET',
        headers: { accept: 'application/json' },
        // credentials: 'include',
      };
      //meet.google.com/dew-hjcz-acz
      https: fetch(`${API_URL}`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setMovieDetail(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  }, [movieId]);

  const sideNav = [
    {
      title: 'Home',
      icon: HomeIcon,
    },
    {
      title: 'Movies',
      icon: MoviesIcon,
    },
    {
      title: 'TV Series',
      icon: TvseriesIcon,
    },
    {
      title: 'Upcoming',
      icon: CalendarIcon,
    },
  ];
  const releaseDate = movie ? movie.release_date : '';
  const utcYear = releaseDate ? new Date(releaseDate).getUTCFullYear() : '';

  return (
    <div className="w-full h-full bg-white m-38px  flex items-start">
      <div className="w-full h-screen">
        <div className="w-[200px] h-full border-[1px] rounded-r-[45px] shadow py-12">
          <div className="flex gap-5 items-center px-5">
            <img src={MovieBoxIcon} alt="movie box" />
            <p className="text-[#000] font-bold">MovieBox</p>
          </div>
          <div className="h-72 flex flex-col justify-evenly mt-12 gap-y-2 text-[#666666]">
            {sideNav.map(({ icon, title }, index) => (
              <div
                onClick={() => setSideNavIndex(index)}
                className={
                  sideNavIndex !== index
                    ? `flex gap-4 items-center p-5 `
                    : `flex gap-4 items-center p-5  bg-[#BE123C1A] border-r-[6px] border-[#BE123C] text-[#BE123C]`
                }
                key={title}
              >
                <img src={icon} alt={title} />
                <p className="font-bold">{title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center py-6">
            <div className="w-full h-[210px] flex flex-col items-center border-[1px] bg-[#be123d0a] border-[#BE123C] mx-5 rounded-[20px] p-4">
              <p className="font-semibold text-[#333333CC] text-center">
                Play movie quizzes and earn free tickets
              </p>
              <p className="text-[13px] text-center">
                50k people are playing now
              </p>
              <button className="bg-[#be123d45] hover:bg-[#be123d56] text-red-900 font-semibold text-[13px] rounded-full my-5 px-3 py-1">
                Start playing
              </button>
            </div>
          </div>
          <div className="flex items-center justify-start pl-6 gap-3">
            <img src={LogoutIcon} alt="logout" />
            <p className="text-[#000] font-bold text-center">Logout</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] py-[38px] px-[51px]">
        <div className="py-38 px-51 w-">
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w400${movieDetail.poster_path}`}
            alt=""
          />
          <div className="">
            <div className="flex mt-9 ">
              <p className="text-black text-lg" data-testid="movie-title">
                {movieDetail?.title}
              </p>
              <div className="text-[#404040] text-lg font-bold leading-[9px]">
                :
              </div>
              <div className="dot text-[#404040] text-[1.5rem] leading-[9px] font-bold">
                .
              </div>
              <p
                className="text-[#404040] text-sm"
                data-testid="movie-release-date"
              >
                {movieDetail.date}
              </p>
              <div className="dot text-[#404040] text-[1.5rem] leading-[9px] font-bold">
                .
              </div>
              <p className="text-[#404040] text-sm">
                {movieDetail.release_date}
              </p>
              <p className="text-[#404040] text-sm">
                {movieDetail.adult ? 'PG-18' : 'PG-13'}
              </p>
              <div className="dot text-[#404040] text-[1.5rem] leading-[9px] font-bold">
                .
              </div>
              <p className="text-[#404040] text-sm" data-testid="movie-runtime">
                {movieDetail.runtime}
              </p>

              <div className="left flex justify-center items-center gap-2">
                <img
                  src={StarIcon}
                  alt="rating"
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[#E8E8E8] text-xs">
                  {movieDetail.vote_average}
                </p>
                <p className="text-[#666666] text-sm font-bold pl-2 border-l-[2px] ">
                  {movieDetail.vote_average}k
                </p>
              </div>
              <div className="flex items-center gap-2">{movieDetail.genre}</div>
            </div>

            <div className="flex">
              <div>
                <div className="left ">
                  <p className="overview text-[#333333]">
                    {movieDetail.overview}
                  </p>
                </div>
                <div>
                  <p className="text-black border border-solid border-gray-500 text-base font-medium leading-7 m-2 px-4 tracking-normal text-left">
                    Awards 9 nominations
                  </p>
                  <img
                    className="relative left-[460px]"
                    src={Expand}
                    alt="expand logo"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <button className="bg-[#BE123C] w-[300px] rounded-lg p-3 mb-3">
                    See show times
                  </button>
                  <button className="bg-[#efdde2] w-[300px] rounded-lg p-3">
                    Watch more option
                  </button>
                </div>
                <div className="mt-5">
                  <div className="w-292 h-21 top-932 left-1132 w-full h-[100px] pt-[22px] rounded-md movie-background">
                    <p className="w-[290px] mt-11 h-[100px] text-white">
                      The Best Movies and Shows in September
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
