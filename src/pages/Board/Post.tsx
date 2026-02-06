import { useQuery } from '@tanstack/react-query';
import ky from 'ky';
import { Loader2Icon } from 'lucide-react';
import type { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { useParams } from 'react-router';

function Post() {
  const { id } = useParams();
  const {
    data: recordMap,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => ky.get<ExtendedRecordMap>(`/api/board/${id}`).json(),
  });

  return (
    <main>
      {!isLoading && recordMap ? (
        <>
          <NotionRenderer
            recordMap={recordMap}
            fullPage
            className="rounded-xl "
            disableHeader
            showTableOfContents
          />
        </>
      ) : isError && error ? (
        <h1 className="text-3xl font-bold">에러: {error.message}</h1>
      ) : (
        <Loader2Icon className="animate-spin" />
      )}
    </main>
  );
}

export default Post;
