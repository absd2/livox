import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Flex,
  Text,
  Input,
  Spacer,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import MovieItem from "./components/MovieItem";
import NoMovieComponent from "./components/NoMovieComponent";
import { Movie } from "./models";

function App() {
  const toast = useToast();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function searchMovies(query?: string) {
    setLoading(true);

    // Fetch API data only if query is provided.
    if (query !== "") {
      try {
        const { data } = await axios.get(
          // Intentional visibility for API key.
          `https://api.themoviedb.org/3/search/movie?api_key=0f282ded95aff7bb89651d650fc76916&language=pt-BR&query=${query}&page=1&include_adult=false`
        );
        setResults(data.results);
      } catch (error) {
        toast({
          title: "Erro de conexão",
          description:
            "Não foi possível estabelecer uma conexão com a lista de filmes da API.",
          status: "error",
        });
      }
    } else {
      toast({
        title: "Ops!",
        description: "Você precisa digitar algo no campo de pesquisa.",
        status: "warning",
      });
    }

    setLoading(false);
  }

  return (
    <Center h="100vh" bgGradient="linear(to-r, blue.900, cyan.900)" p={10}>
      <Flex
        direction="column"
        align="center"
        maxWidth="800px"
        minWidth="250px"
        w="80%"
        maxHeight="80vh"
      >
        <Box
          bgColor="white"
          borderRadius={4}
          boxShadow="xl"
          mb={10}
          p={6}
          w="100%"
        >
          <Text fontWeight="bold" fontSize="2xl" mb={2}>
            Listagem de filmes
          </Text>
          <Flex>
            <Input
              autoFocus
              focusBorderColor="blue.900"
              placeholder="Procure por um filme..."
              variant="flushed"
              mb={4}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <Spacer />
            <Button
              ml={4}
              bgColor="blue.900"
              color="white"
              leftIcon={<SearchIcon />}
              px={8}
              isLoading={loading}
              onClick={() => searchMovies(value)}
            >
              Pesquisar
            </Button>
          </Flex>
        </Box>

        <Box
          bgColor="white"
          p={6}
          borderRadius={4}
          overflowY="auto"
          boxShadow="xl"
          w="100%"
        >
          {loading && (
            <Flex mt={3} mb={3} justifyContent="center">
              <Spinner mr={3} />
              Pesquisando...
            </Flex>
          )}

          {results.length > 0 ? (
            results.map((result: Movie) => (
              <MovieItem key={result.id} movie={result} />
            ))
          ) : (
            <NoMovieComponent />
          )}
        </Box>
      </Flex>
    </Center>
  );
}

export default App;
