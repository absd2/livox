import React from "react";
import { Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Movie } from "../../models";
import ViewMovieDetails from "../ViewMovieDetails";

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const disclosure = useDisclosure();

  function handleClick() {
    disclosure.onOpen();
  }

  return (
    <>
      <Flex
        p={4}
        bgColor="gray.50"
        align="center"
        mb={2}
        cursor="pointer"
        onClick={() => handleClick()}
      >
        <Text>{movie.title}</Text>
        <Spacer />
        <ChevronRightIcon color="blue.900" />
      </Flex>
      <ViewMovieDetails movie={movie} disclosure={disclosure} />
    </>
  );
};

export default MovieItem;
