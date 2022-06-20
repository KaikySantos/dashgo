import { Stack, Button, Box, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegistes: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const sibilingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegistes,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegistes / registerPerPage);

  const previousPage = currentPage > 1
    ? generatePagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + sibilingsCount, lastPage))
  : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">

        {currentPage > (1 + sibilingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + sibilingsCount) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            ) }
          </>
        )}
        
        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + sibilingsCount) < lastPage && (
          <>
            { (currentPage + 1 + sibilingsCount) < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            ) }
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  );
}