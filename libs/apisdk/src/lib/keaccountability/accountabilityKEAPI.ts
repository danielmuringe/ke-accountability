/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Accountability KE API
 * Accountability Ke API Docs
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { customSocketBackendClient } from '../custom.axios';
export interface MissingPersonEntity {
  additionalInfo: string;
  age: number;
  firstName: string;
  foundContact: string;
  idNumber: string;
  isFound: boolean;
  lastName: string;
  lastSeenAt: string;
  lastSeenOn: string;
  photoUrl: string;
}

export interface CreateMissingPersonDTO {
  additionalInfo: string;
  age: number;
  firstName: string;
  foundContact: string;
  idNumber: string;
  lastName: string;
  lastSeenAt: string;
  lastSeenOn: string;
}




type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export const appControllerGetData = (
    
 options?: SecondParameter<typeof customSocketBackendClient>,signal?: AbortSignal
) => {
      
      
      return customSocketBackendClient<void>(
      {url: `/api`, method: 'GET', signal
    },
      options);
    }
  

export const getAppControllerGetDataQueryKey = () => {
    return [`/api`] as const;
    }

    
export const getAppControllerGetDataQueryOptions = <TData = Awaited<ReturnType<typeof appControllerGetData>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof appControllerGetData>>, TError, TData>>, request?: SecondParameter<typeof customSocketBackendClient>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getAppControllerGetDataQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof appControllerGetData>>> = ({ signal }) => appControllerGetData(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof appControllerGetData>>, TError, TData> & { queryKey: QueryKey }
}

export type AppControllerGetDataQueryResult = NonNullable<Awaited<ReturnType<typeof appControllerGetData>>>
export type AppControllerGetDataQueryError = unknown

export const useAppControllerGetData = <TData = Awaited<ReturnType<typeof appControllerGetData>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof appControllerGetData>>, TError, TData>>, request?: SecondParameter<typeof customSocketBackendClient>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getAppControllerGetDataQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Create a missing person
 */
export const createMissingPerson = (
    createMissingPersonDTO: CreateMissingPersonDTO,
 options?: SecondParameter<typeof customSocketBackendClient>,) => {
      
      
      return customSocketBackendClient<void>(
      {url: `/api/missing-person`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createMissingPersonDTO
    },
      options);
    }
  


export const getCreateMissingPersonMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createMissingPerson>>, TError,{data: CreateMissingPersonDTO}, TContext>, request?: SecondParameter<typeof customSocketBackendClient>}
): UseMutationOptions<Awaited<ReturnType<typeof createMissingPerson>>, TError,{data: CreateMissingPersonDTO}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createMissingPerson>>, {data: CreateMissingPersonDTO}> = (props) => {
          const {data} = props ?? {};

          return  createMissingPerson(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type CreateMissingPersonMutationResult = NonNullable<Awaited<ReturnType<typeof createMissingPerson>>>
    export type CreateMissingPersonMutationBody = CreateMissingPersonDTO
    export type CreateMissingPersonMutationError = unknown

    /**
 * @summary Create a missing person
 */
export const useCreateMissingPerson = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createMissingPerson>>, TError,{data: CreateMissingPersonDTO}, TContext>, request?: SecondParameter<typeof customSocketBackendClient>}
): UseMutationResult<
        Awaited<ReturnType<typeof createMissingPerson>>,
        TError,
        {data: CreateMissingPersonDTO},
        TContext
      > => {

      const mutationOptions = getCreateMissingPersonMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Get all missing people
 */
export const getMissingPeople = (
    
 options?: SecondParameter<typeof customSocketBackendClient>,signal?: AbortSignal
) => {
      
      
      return customSocketBackendClient<MissingPersonEntity[]>(
      {url: `/api/missing-person`, method: 'GET', signal
    },
      options);
    }
  

export const getGetMissingPeopleQueryKey = () => {
    return [`/api/missing-person`] as const;
    }

    
export const getGetMissingPeopleQueryOptions = <TData = Awaited<ReturnType<typeof getMissingPeople>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getMissingPeople>>, TError, TData>>, request?: SecondParameter<typeof customSocketBackendClient>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetMissingPeopleQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getMissingPeople>>> = ({ signal }) => getMissingPeople(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getMissingPeople>>, TError, TData> & { queryKey: QueryKey }
}

export type GetMissingPeopleQueryResult = NonNullable<Awaited<ReturnType<typeof getMissingPeople>>>
export type GetMissingPeopleQueryError = unknown

/**
 * @summary Get all missing people
 */
export const useGetMissingPeople = <TData = Awaited<ReturnType<typeof getMissingPeople>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getMissingPeople>>, TError, TData>>, request?: SecondParameter<typeof customSocketBackendClient>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetMissingPeopleQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




