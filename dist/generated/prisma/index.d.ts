
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InterestRate
 * 
 */
export type InterestRate = $Result.DefaultSelection<Prisma.$InterestRatePayload>
/**
 * Model Credit
 * 
 */
export type Credit = $Result.DefaultSelection<Prisma.$CreditPayload>
/**
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = $Result.DefaultSelection<Prisma.$PaymentHistoryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interestRate`: Exposes CRUD operations for the **InterestRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterestRates
    * const interestRates = await prisma.interestRate.findMany()
    * ```
    */
  get interestRate(): Prisma.InterestRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credit`: Exposes CRUD operations for the **Credit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credits
    * const credits = await prisma.credit.findMany()
    * ```
    */
  get credit(): Prisma.CreditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    InterestRate: 'InterestRate',
    Credit: 'Credit',
    PaymentHistory: 'PaymentHistory',
    Notification: 'Notification',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "interestRate" | "credit" | "paymentHistory" | "notification" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      InterestRate: {
        payload: Prisma.$InterestRatePayload<ExtArgs>
        fields: Prisma.InterestRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>
          }
          findFirst: {
            args: Prisma.InterestRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>
          }
          findMany: {
            args: Prisma.InterestRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>[]
          }
          create: {
            args: Prisma.InterestRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>
          }
          createMany: {
            args: Prisma.InterestRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InterestRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>
          }
          update: {
            args: Prisma.InterestRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>
          }
          deleteMany: {
            args: Prisma.InterestRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterestRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestRatePayload>
          }
          aggregate: {
            args: Prisma.InterestRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterestRate>
          }
          groupBy: {
            args: Prisma.InterestRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestRateCountArgs<ExtArgs>
            result: $Utils.Optional<InterestRateCountAggregateOutputType> | number
          }
        }
      }
      Credit: {
        payload: Prisma.$CreditPayload<ExtArgs>
        fields: Prisma.CreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findFirst: {
            args: Prisma.CreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          findMany: {
            args: Prisma.CreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>[]
          }
          create: {
            args: Prisma.CreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          createMany: {
            args: Prisma.CreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          update: {
            args: Prisma.CreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          deleteMany: {
            args: Prisma.CreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditPayload>
          }
          aggregate: {
            args: Prisma.CreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredit>
          }
          groupBy: {
            args: Prisma.CreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCountAggregateOutputType> | number
          }
        }
      }
      PaymentHistory: {
        payload: Prisma.$PaymentHistoryPayload<ExtArgs>
        fields: Prisma.PaymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          update: {
            args: Prisma.PaymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentHistory>
          }
          groupBy: {
            args: Prisma.PaymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    interestRate?: InterestRateOmit
    credit?: CreditOmit
    paymentHistory?: PaymentHistoryOmit
    notification?: NotificationOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    credits: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credits?: boolean | UserCountOutputTypeCountCreditsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }


  /**
   * Count Type InterestRateCountOutputType
   */

  export type InterestRateCountOutputType = {
    credits: number
  }

  export type InterestRateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credits?: boolean | InterestRateCountOutputTypeCountCreditsArgs
  }

  // Custom InputTypes
  /**
   * InterestRateCountOutputType without action
   */
  export type InterestRateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRateCountOutputType
     */
    select?: InterestRateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterestRateCountOutputType without action
   */
  export type InterestRateCountOutputTypeCountCreditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWhereInput
  }


  /**
   * Count Type CreditCountOutputType
   */

  export type CreditCountOutputType = {
    payments: number
  }

  export type CreditCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | CreditCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CreditCountOutputType without action
   */
  export type CreditCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCountOutputType
     */
    select?: CreditCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditCountOutputType without action
   */
  export type CreditCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    permissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    permissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    permissions: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      permissions: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly permissions: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    salary: number | null
    debtAmount: number | null
    paidAmount: number | null
    installmentAmount: number | null
    interestRate: number | null
    roleId: number | null
    approvedBy: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    salary: number | null
    debtAmount: number | null
    paidAmount: number | null
    installmentAmount: number | null
    interestRate: number | null
    roleId: number | null
    approvedBy: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    documentNumber: string | null
    birthDate: Date | null
    position: string | null
    startDate: Date | null
    salary: number | null
    hasDebt: boolean | null
    debtAmount: number | null
    paidAmount: number | null
    installmentAmount: number | null
    interestRate: number | null
    contractType: string | null
    roleId: number | null
    mustChangePassword: boolean | null
    isActive: boolean | null
    emailVerified: boolean | null
    pendingActivation: boolean | null
    pendingApproval: boolean | null
    approvedBy: number | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    documentNumber: string | null
    birthDate: Date | null
    position: string | null
    startDate: Date | null
    salary: number | null
    hasDebt: boolean | null
    debtAmount: number | null
    paidAmount: number | null
    installmentAmount: number | null
    interestRate: number | null
    contractType: string | null
    roleId: number | null
    mustChangePassword: boolean | null
    isActive: boolean | null
    emailVerified: boolean | null
    pendingActivation: boolean | null
    pendingApproval: boolean | null
    approvedBy: number | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    documentNumber: number
    birthDate: number
    position: number
    startDate: number
    salary: number
    hasDebt: number
    debtAmount: number
    paidAmount: number
    installmentAmount: number
    interestRate: number
    contractType: number
    roleId: number
    mustChangePassword: number
    isActive: number
    emailVerified: number
    pendingActivation: number
    pendingApproval: number
    approvedBy: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    salary?: true
    debtAmount?: true
    paidAmount?: true
    installmentAmount?: true
    interestRate?: true
    roleId?: true
    approvedBy?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    salary?: true
    debtAmount?: true
    paidAmount?: true
    installmentAmount?: true
    interestRate?: true
    roleId?: true
    approvedBy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    documentNumber?: true
    birthDate?: true
    position?: true
    startDate?: true
    salary?: true
    hasDebt?: true
    debtAmount?: true
    paidAmount?: true
    installmentAmount?: true
    interestRate?: true
    contractType?: true
    roleId?: true
    mustChangePassword?: true
    isActive?: true
    emailVerified?: true
    pendingActivation?: true
    pendingApproval?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    documentNumber?: true
    birthDate?: true
    position?: true
    startDate?: true
    salary?: true
    hasDebt?: true
    debtAmount?: true
    paidAmount?: true
    installmentAmount?: true
    interestRate?: true
    contractType?: true
    roleId?: true
    mustChangePassword?: true
    isActive?: true
    emailVerified?: true
    pendingActivation?: true
    pendingApproval?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    documentNumber?: true
    birthDate?: true
    position?: true
    startDate?: true
    salary?: true
    hasDebt?: true
    debtAmount?: true
    paidAmount?: true
    installmentAmount?: true
    interestRate?: true
    contractType?: true
    roleId?: true
    mustChangePassword?: true
    isActive?: true
    emailVerified?: true
    pendingActivation?: true
    pendingApproval?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string | null
    documentNumber: string | null
    birthDate: Date | null
    position: string | null
    startDate: Date | null
    salary: number | null
    hasDebt: boolean
    debtAmount: number | null
    paidAmount: number | null
    installmentAmount: number | null
    interestRate: number | null
    contractType: string | null
    roleId: number
    mustChangePassword: boolean
    isActive: boolean
    emailVerified: boolean
    pendingActivation: boolean
    pendingApproval: boolean
    approvedBy: number | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    documentNumber?: boolean
    birthDate?: boolean
    position?: boolean
    startDate?: boolean
    salary?: boolean
    hasDebt?: boolean
    debtAmount?: boolean
    paidAmount?: boolean
    installmentAmount?: boolean
    interestRate?: boolean
    contractType?: boolean
    roleId?: boolean
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    credits?: boolean | User$creditsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    documentNumber?: boolean
    birthDate?: boolean
    position?: boolean
    startDate?: boolean
    salary?: boolean
    hasDebt?: boolean
    debtAmount?: boolean
    paidAmount?: boolean
    installmentAmount?: boolean
    interestRate?: boolean
    contractType?: boolean
    roleId?: boolean
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "documentNumber" | "birthDate" | "position" | "startDate" | "salary" | "hasDebt" | "debtAmount" | "paidAmount" | "installmentAmount" | "interestRate" | "contractType" | "roleId" | "mustChangePassword" | "isActive" | "emailVerified" | "pendingActivation" | "pendingApproval" | "approvedBy" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    credits?: boolean | User$creditsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      credits: Prisma.$CreditPayload<ExtArgs>[]
      payments: Prisma.$PaymentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string | null
      documentNumber: string | null
      birthDate: Date | null
      position: string | null
      startDate: Date | null
      salary: number | null
      hasDebt: boolean
      debtAmount: number | null
      paidAmount: number | null
      installmentAmount: number | null
      interestRate: number | null
      contractType: string | null
      roleId: number
      mustChangePassword: boolean
      isActive: boolean
      emailVerified: boolean
      pendingActivation: boolean
      pendingApproval: boolean
      approvedBy: number | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    credits<T extends User$creditsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly documentNumber: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly position: FieldRef<"User", 'String'>
    readonly startDate: FieldRef<"User", 'DateTime'>
    readonly salary: FieldRef<"User", 'Float'>
    readonly hasDebt: FieldRef<"User", 'Boolean'>
    readonly debtAmount: FieldRef<"User", 'Float'>
    readonly paidAmount: FieldRef<"User", 'Float'>
    readonly installmentAmount: FieldRef<"User", 'Float'>
    readonly interestRate: FieldRef<"User", 'Float'>
    readonly contractType: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly pendingActivation: FieldRef<"User", 'Boolean'>
    readonly pendingApproval: FieldRef<"User", 'Boolean'>
    readonly approvedBy: FieldRef<"User", 'Int'>
    readonly approvedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.credits
   */
  export type User$creditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    where?: CreditWhereInput
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    cursor?: CreditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model InterestRate
   */

  export type AggregateInterestRate = {
    _count: InterestRateCountAggregateOutputType | null
    _avg: InterestRateAvgAggregateOutputType | null
    _sum: InterestRateSumAggregateOutputType | null
    _min: InterestRateMinAggregateOutputType | null
    _max: InterestRateMaxAggregateOutputType | null
  }

  export type InterestRateAvgAggregateOutputType = {
    id: number | null
    rate: number | null
    minMonths: number | null
  }

  export type InterestRateSumAggregateOutputType = {
    id: number | null
    rate: number | null
    minMonths: number | null
  }

  export type InterestRateMinAggregateOutputType = {
    id: number | null
    name: string | null
    rate: number | null
    minMonths: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestRateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rate: number | null
    minMonths: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestRateCountAggregateOutputType = {
    id: number
    name: number
    rate: number
    minMonths: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterestRateAvgAggregateInputType = {
    id?: true
    rate?: true
    minMonths?: true
  }

  export type InterestRateSumAggregateInputType = {
    id?: true
    rate?: true
    minMonths?: true
  }

  export type InterestRateMinAggregateInputType = {
    id?: true
    name?: true
    rate?: true
    minMonths?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestRateMaxAggregateInputType = {
    id?: true
    name?: true
    rate?: true
    minMonths?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestRateCountAggregateInputType = {
    id?: true
    name?: true
    rate?: true
    minMonths?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterestRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestRate to aggregate.
     */
    where?: InterestRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestRates to fetch.
     */
    orderBy?: InterestRateOrderByWithRelationInput | InterestRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterestRates
    **/
    _count?: true | InterestRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestRateMaxAggregateInputType
  }

  export type GetInterestRateAggregateType<T extends InterestRateAggregateArgs> = {
        [P in keyof T & keyof AggregateInterestRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterestRate[P]>
      : GetScalarType<T[P], AggregateInterestRate[P]>
  }




  export type InterestRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestRateWhereInput
    orderBy?: InterestRateOrderByWithAggregationInput | InterestRateOrderByWithAggregationInput[]
    by: InterestRateScalarFieldEnum[] | InterestRateScalarFieldEnum
    having?: InterestRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestRateCountAggregateInputType | true
    _avg?: InterestRateAvgAggregateInputType
    _sum?: InterestRateSumAggregateInputType
    _min?: InterestRateMinAggregateInputType
    _max?: InterestRateMaxAggregateInputType
  }

  export type InterestRateGroupByOutputType = {
    id: number
    name: string
    rate: number
    minMonths: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: InterestRateCountAggregateOutputType | null
    _avg: InterestRateAvgAggregateOutputType | null
    _sum: InterestRateSumAggregateOutputType | null
    _min: InterestRateMinAggregateOutputType | null
    _max: InterestRateMaxAggregateOutputType | null
  }

  type GetInterestRateGroupByPayload<T extends InterestRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestRateGroupByOutputType[P]>
            : GetScalarType<T[P], InterestRateGroupByOutputType[P]>
        }
      >
    >


  export type InterestRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rate?: boolean
    minMonths?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean | InterestRate$creditsArgs<ExtArgs>
    _count?: boolean | InterestRateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interestRate"]>



  export type InterestRateSelectScalar = {
    id?: boolean
    name?: boolean
    rate?: boolean
    minMonths?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterestRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rate" | "minMonths" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["interestRate"]>
  export type InterestRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credits?: boolean | InterestRate$creditsArgs<ExtArgs>
    _count?: boolean | InterestRateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InterestRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterestRate"
    objects: {
      credits: Prisma.$CreditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rate: number
      minMonths: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interestRate"]>
    composites: {}
  }

  type InterestRateGetPayload<S extends boolean | null | undefined | InterestRateDefaultArgs> = $Result.GetResult<Prisma.$InterestRatePayload, S>

  type InterestRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestRateCountAggregateInputType | true
    }

  export interface InterestRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterestRate'], meta: { name: 'InterestRate' } }
    /**
     * Find zero or one InterestRate that matches the filter.
     * @param {InterestRateFindUniqueArgs} args - Arguments to find a InterestRate
     * @example
     * // Get one InterestRate
     * const interestRate = await prisma.interestRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestRateFindUniqueArgs>(args: SelectSubset<T, InterestRateFindUniqueArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterestRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestRateFindUniqueOrThrowArgs} args - Arguments to find a InterestRate
     * @example
     * // Get one InterestRate
     * const interestRate = await prisma.interestRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestRateFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateFindFirstArgs} args - Arguments to find a InterestRate
     * @example
     * // Get one InterestRate
     * const interestRate = await prisma.interestRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestRateFindFirstArgs>(args?: SelectSubset<T, InterestRateFindFirstArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterestRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateFindFirstOrThrowArgs} args - Arguments to find a InterestRate
     * @example
     * // Get one InterestRate
     * const interestRate = await prisma.interestRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestRateFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterestRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterestRates
     * const interestRates = await prisma.interestRate.findMany()
     * 
     * // Get first 10 InterestRates
     * const interestRates = await prisma.interestRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestRateWithIdOnly = await prisma.interestRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestRateFindManyArgs>(args?: SelectSubset<T, InterestRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterestRate.
     * @param {InterestRateCreateArgs} args - Arguments to create a InterestRate.
     * @example
     * // Create one InterestRate
     * const InterestRate = await prisma.interestRate.create({
     *   data: {
     *     // ... data to create a InterestRate
     *   }
     * })
     * 
     */
    create<T extends InterestRateCreateArgs>(args: SelectSubset<T, InterestRateCreateArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterestRates.
     * @param {InterestRateCreateManyArgs} args - Arguments to create many InterestRates.
     * @example
     * // Create many InterestRates
     * const interestRate = await prisma.interestRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestRateCreateManyArgs>(args?: SelectSubset<T, InterestRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InterestRate.
     * @param {InterestRateDeleteArgs} args - Arguments to delete one InterestRate.
     * @example
     * // Delete one InterestRate
     * const InterestRate = await prisma.interestRate.delete({
     *   where: {
     *     // ... filter to delete one InterestRate
     *   }
     * })
     * 
     */
    delete<T extends InterestRateDeleteArgs>(args: SelectSubset<T, InterestRateDeleteArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterestRate.
     * @param {InterestRateUpdateArgs} args - Arguments to update one InterestRate.
     * @example
     * // Update one InterestRate
     * const interestRate = await prisma.interestRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestRateUpdateArgs>(args: SelectSubset<T, InterestRateUpdateArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterestRates.
     * @param {InterestRateDeleteManyArgs} args - Arguments to filter InterestRates to delete.
     * @example
     * // Delete a few InterestRates
     * const { count } = await prisma.interestRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestRateDeleteManyArgs>(args?: SelectSubset<T, InterestRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterestRates
     * const interestRate = await prisma.interestRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestRateUpdateManyArgs>(args: SelectSubset<T, InterestRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InterestRate.
     * @param {InterestRateUpsertArgs} args - Arguments to update or create a InterestRate.
     * @example
     * // Update or create a InterestRate
     * const interestRate = await prisma.interestRate.upsert({
     *   create: {
     *     // ... data to create a InterestRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterestRate we want to update
     *   }
     * })
     */
    upsert<T extends InterestRateUpsertArgs>(args: SelectSubset<T, InterestRateUpsertArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterestRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateCountArgs} args - Arguments to filter InterestRates to count.
     * @example
     * // Count the number of InterestRates
     * const count = await prisma.interestRate.count({
     *   where: {
     *     // ... the filter for the InterestRates we want to count
     *   }
     * })
    **/
    count<T extends InterestRateCountArgs>(
      args?: Subset<T, InterestRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterestRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestRateAggregateArgs>(args: Subset<T, InterestRateAggregateArgs>): Prisma.PrismaPromise<GetInterestRateAggregateType<T>>

    /**
     * Group by InterestRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestRateGroupByArgs['orderBy'] }
        : { orderBy?: InterestRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterestRate model
   */
  readonly fields: InterestRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterestRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credits<T extends InterestRate$creditsArgs<ExtArgs> = {}>(args?: Subset<T, InterestRate$creditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterestRate model
   */
  interface InterestRateFieldRefs {
    readonly id: FieldRef<"InterestRate", 'Int'>
    readonly name: FieldRef<"InterestRate", 'String'>
    readonly rate: FieldRef<"InterestRate", 'Float'>
    readonly minMonths: FieldRef<"InterestRate", 'Int'>
    readonly isActive: FieldRef<"InterestRate", 'Boolean'>
    readonly createdAt: FieldRef<"InterestRate", 'DateTime'>
    readonly updatedAt: FieldRef<"InterestRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterestRate findUnique
   */
  export type InterestRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * Filter, which InterestRate to fetch.
     */
    where: InterestRateWhereUniqueInput
  }

  /**
   * InterestRate findUniqueOrThrow
   */
  export type InterestRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * Filter, which InterestRate to fetch.
     */
    where: InterestRateWhereUniqueInput
  }

  /**
   * InterestRate findFirst
   */
  export type InterestRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * Filter, which InterestRate to fetch.
     */
    where?: InterestRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestRates to fetch.
     */
    orderBy?: InterestRateOrderByWithRelationInput | InterestRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestRates.
     */
    cursor?: InterestRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestRates.
     */
    distinct?: InterestRateScalarFieldEnum | InterestRateScalarFieldEnum[]
  }

  /**
   * InterestRate findFirstOrThrow
   */
  export type InterestRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * Filter, which InterestRate to fetch.
     */
    where?: InterestRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestRates to fetch.
     */
    orderBy?: InterestRateOrderByWithRelationInput | InterestRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestRates.
     */
    cursor?: InterestRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestRates.
     */
    distinct?: InterestRateScalarFieldEnum | InterestRateScalarFieldEnum[]
  }

  /**
   * InterestRate findMany
   */
  export type InterestRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * Filter, which InterestRates to fetch.
     */
    where?: InterestRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestRates to fetch.
     */
    orderBy?: InterestRateOrderByWithRelationInput | InterestRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterestRates.
     */
    cursor?: InterestRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestRates.
     */
    skip?: number
    distinct?: InterestRateScalarFieldEnum | InterestRateScalarFieldEnum[]
  }

  /**
   * InterestRate create
   */
  export type InterestRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * The data needed to create a InterestRate.
     */
    data: XOR<InterestRateCreateInput, InterestRateUncheckedCreateInput>
  }

  /**
   * InterestRate createMany
   */
  export type InterestRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterestRates.
     */
    data: InterestRateCreateManyInput | InterestRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterestRate update
   */
  export type InterestRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * The data needed to update a InterestRate.
     */
    data: XOR<InterestRateUpdateInput, InterestRateUncheckedUpdateInput>
    /**
     * Choose, which InterestRate to update.
     */
    where: InterestRateWhereUniqueInput
  }

  /**
   * InterestRate updateMany
   */
  export type InterestRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterestRates.
     */
    data: XOR<InterestRateUpdateManyMutationInput, InterestRateUncheckedUpdateManyInput>
    /**
     * Filter which InterestRates to update
     */
    where?: InterestRateWhereInput
    /**
     * Limit how many InterestRates to update.
     */
    limit?: number
  }

  /**
   * InterestRate upsert
   */
  export type InterestRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * The filter to search for the InterestRate to update in case it exists.
     */
    where: InterestRateWhereUniqueInput
    /**
     * In case the InterestRate found by the `where` argument doesn't exist, create a new InterestRate with this data.
     */
    create: XOR<InterestRateCreateInput, InterestRateUncheckedCreateInput>
    /**
     * In case the InterestRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestRateUpdateInput, InterestRateUncheckedUpdateInput>
  }

  /**
   * InterestRate delete
   */
  export type InterestRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
    /**
     * Filter which InterestRate to delete.
     */
    where: InterestRateWhereUniqueInput
  }

  /**
   * InterestRate deleteMany
   */
  export type InterestRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestRates to delete
     */
    where?: InterestRateWhereInput
    /**
     * Limit how many InterestRates to delete.
     */
    limit?: number
  }

  /**
   * InterestRate.credits
   */
  export type InterestRate$creditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    where?: CreditWhereInput
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    cursor?: CreditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * InterestRate without action
   */
  export type InterestRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestRate
     */
    select?: InterestRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterestRate
     */
    omit?: InterestRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestRateInclude<ExtArgs> | null
  }


  /**
   * Model Credit
   */

  export type AggregateCredit = {
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  export type CreditAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    loanAmount: number | null
    installments: number | null
    installmentAmount: number | null
    outstandingAmount: number | null
    paidInstallments: number | null
    interestRateId: number | null
  }

  export type CreditSumAggregateOutputType = {
    id: number | null
    userId: number | null
    loanAmount: number | null
    installments: number | null
    installmentAmount: number | null
    outstandingAmount: number | null
    paidInstallments: number | null
    interestRateId: number | null
  }

  export type CreditMinAggregateOutputType = {
    id: number | null
    userId: number | null
    creditType: string | null
    loanAmount: number | null
    installments: number | null
    installmentAmount: number | null
    outstandingAmount: number | null
    paidInstallments: number | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    interestRateId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    creditType: string | null
    loanAmount: number | null
    installments: number | null
    installmentAmount: number | null
    outstandingAmount: number | null
    paidInstallments: number | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    interestRateId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCountAggregateOutputType = {
    id: number
    userId: number
    creditType: number
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments: number
    startDate: number
    endDate: number
    status: number
    interestRateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditAvgAggregateInputType = {
    id?: true
    userId?: true
    loanAmount?: true
    installments?: true
    installmentAmount?: true
    outstandingAmount?: true
    paidInstallments?: true
    interestRateId?: true
  }

  export type CreditSumAggregateInputType = {
    id?: true
    userId?: true
    loanAmount?: true
    installments?: true
    installmentAmount?: true
    outstandingAmount?: true
    paidInstallments?: true
    interestRateId?: true
  }

  export type CreditMinAggregateInputType = {
    id?: true
    userId?: true
    creditType?: true
    loanAmount?: true
    installments?: true
    installmentAmount?: true
    outstandingAmount?: true
    paidInstallments?: true
    startDate?: true
    endDate?: true
    status?: true
    interestRateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditMaxAggregateInputType = {
    id?: true
    userId?: true
    creditType?: true
    loanAmount?: true
    installments?: true
    installmentAmount?: true
    outstandingAmount?: true
    paidInstallments?: true
    startDate?: true
    endDate?: true
    status?: true
    interestRateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCountAggregateInputType = {
    id?: true
    userId?: true
    creditType?: true
    loanAmount?: true
    installments?: true
    installmentAmount?: true
    outstandingAmount?: true
    paidInstallments?: true
    startDate?: true
    endDate?: true
    status?: true
    interestRateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credit to aggregate.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credits
    **/
    _count?: true | CreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditMaxAggregateInputType
  }

  export type GetCreditAggregateType<T extends CreditAggregateArgs> = {
        [P in keyof T & keyof AggregateCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredit[P]>
      : GetScalarType<T[P], AggregateCredit[P]>
  }




  export type CreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditWhereInput
    orderBy?: CreditOrderByWithAggregationInput | CreditOrderByWithAggregationInput[]
    by: CreditScalarFieldEnum[] | CreditScalarFieldEnum
    having?: CreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCountAggregateInputType | true
    _avg?: CreditAvgAggregateInputType
    _sum?: CreditSumAggregateInputType
    _min?: CreditMinAggregateInputType
    _max?: CreditMaxAggregateInputType
  }

  export type CreditGroupByOutputType = {
    id: number
    userId: number
    creditType: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments: number
    startDate: Date
    endDate: Date
    status: string
    interestRateId: number
    createdAt: Date
    updatedAt: Date
    _count: CreditCountAggregateOutputType | null
    _avg: CreditAvgAggregateOutputType | null
    _sum: CreditSumAggregateOutputType | null
    _min: CreditMinAggregateOutputType | null
    _max: CreditMaxAggregateOutputType | null
  }

  type GetCreditGroupByPayload<T extends CreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditGroupByOutputType[P]>
            : GetScalarType<T[P], CreditGroupByOutputType[P]>
        }
      >
    >


  export type CreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creditType?: boolean
    loanAmount?: boolean
    installments?: boolean
    installmentAmount?: boolean
    outstandingAmount?: boolean
    paidInstallments?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    interestRateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interestRate?: boolean | InterestRateDefaultArgs<ExtArgs>
    payments?: boolean | Credit$paymentsArgs<ExtArgs>
    _count?: boolean | CreditCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credit"]>



  export type CreditSelectScalar = {
    id?: boolean
    userId?: boolean
    creditType?: boolean
    loanAmount?: boolean
    installments?: boolean
    installmentAmount?: boolean
    outstandingAmount?: boolean
    paidInstallments?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    interestRateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "creditType" | "loanAmount" | "installments" | "installmentAmount" | "outstandingAmount" | "paidInstallments" | "startDate" | "endDate" | "status" | "interestRateId" | "createdAt" | "updatedAt", ExtArgs["result"]["credit"]>
  export type CreditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interestRate?: boolean | InterestRateDefaultArgs<ExtArgs>
    payments?: boolean | Credit$paymentsArgs<ExtArgs>
    _count?: boolean | CreditCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      interestRate: Prisma.$InterestRatePayload<ExtArgs>
      payments: Prisma.$PaymentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      creditType: string | null
      loanAmount: number
      installments: number
      installmentAmount: number
      outstandingAmount: number
      paidInstallments: number
      startDate: Date
      endDate: Date
      status: string
      interestRateId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credit"]>
    composites: {}
  }

  type CreditGetPayload<S extends boolean | null | undefined | CreditDefaultArgs> = $Result.GetResult<Prisma.$CreditPayload, S>

  type CreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCountAggregateInputType | true
    }

  export interface CreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credit'], meta: { name: 'Credit' } }
    /**
     * Find zero or one Credit that matches the filter.
     * @param {CreditFindUniqueArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditFindUniqueArgs>(args: SelectSubset<T, CreditFindUniqueArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditFindUniqueOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditFindFirstArgs>(args?: SelectSubset<T, CreditFindFirstArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindFirstOrThrowArgs} args - Arguments to find a Credit
     * @example
     * // Get one Credit
     * const credit = await prisma.credit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credits
     * const credits = await prisma.credit.findMany()
     * 
     * // Get first 10 Credits
     * const credits = await prisma.credit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditWithIdOnly = await prisma.credit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditFindManyArgs>(args?: SelectSubset<T, CreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credit.
     * @param {CreditCreateArgs} args - Arguments to create a Credit.
     * @example
     * // Create one Credit
     * const Credit = await prisma.credit.create({
     *   data: {
     *     // ... data to create a Credit
     *   }
     * })
     * 
     */
    create<T extends CreditCreateArgs>(args: SelectSubset<T, CreditCreateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credits.
     * @param {CreditCreateManyArgs} args - Arguments to create many Credits.
     * @example
     * // Create many Credits
     * const credit = await prisma.credit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCreateManyArgs>(args?: SelectSubset<T, CreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Credit.
     * @param {CreditDeleteArgs} args - Arguments to delete one Credit.
     * @example
     * // Delete one Credit
     * const Credit = await prisma.credit.delete({
     *   where: {
     *     // ... filter to delete one Credit
     *   }
     * })
     * 
     */
    delete<T extends CreditDeleteArgs>(args: SelectSubset<T, CreditDeleteArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credit.
     * @param {CreditUpdateArgs} args - Arguments to update one Credit.
     * @example
     * // Update one Credit
     * const credit = await prisma.credit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditUpdateArgs>(args: SelectSubset<T, CreditUpdateArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credits.
     * @param {CreditDeleteManyArgs} args - Arguments to filter Credits to delete.
     * @example
     * // Delete a few Credits
     * const { count } = await prisma.credit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditDeleteManyArgs>(args?: SelectSubset<T, CreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credits
     * const credit = await prisma.credit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditUpdateManyArgs>(args: SelectSubset<T, CreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Credit.
     * @param {CreditUpsertArgs} args - Arguments to update or create a Credit.
     * @example
     * // Update or create a Credit
     * const credit = await prisma.credit.upsert({
     *   create: {
     *     // ... data to create a Credit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credit we want to update
     *   }
     * })
     */
    upsert<T extends CreditUpsertArgs>(args: SelectSubset<T, CreditUpsertArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCountArgs} args - Arguments to filter Credits to count.
     * @example
     * // Count the number of Credits
     * const count = await prisma.credit.count({
     *   where: {
     *     // ... the filter for the Credits we want to count
     *   }
     * })
    **/
    count<T extends CreditCountArgs>(
      args?: Subset<T, CreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditAggregateArgs>(args: Subset<T, CreditAggregateArgs>): Prisma.PrismaPromise<GetCreditAggregateType<T>>

    /**
     * Group by Credit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditGroupByArgs['orderBy'] }
        : { orderBy?: CreditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credit model
   */
  readonly fields: CreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interestRate<T extends InterestRateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestRateDefaultArgs<ExtArgs>>): Prisma__InterestRateClient<$Result.GetResult<Prisma.$InterestRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Credit$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Credit$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credit model
   */
  interface CreditFieldRefs {
    readonly id: FieldRef<"Credit", 'Int'>
    readonly userId: FieldRef<"Credit", 'Int'>
    readonly creditType: FieldRef<"Credit", 'String'>
    readonly loanAmount: FieldRef<"Credit", 'Float'>
    readonly installments: FieldRef<"Credit", 'Int'>
    readonly installmentAmount: FieldRef<"Credit", 'Float'>
    readonly outstandingAmount: FieldRef<"Credit", 'Float'>
    readonly paidInstallments: FieldRef<"Credit", 'Int'>
    readonly startDate: FieldRef<"Credit", 'DateTime'>
    readonly endDate: FieldRef<"Credit", 'DateTime'>
    readonly status: FieldRef<"Credit", 'String'>
    readonly interestRateId: FieldRef<"Credit", 'Int'>
    readonly createdAt: FieldRef<"Credit", 'DateTime'>
    readonly updatedAt: FieldRef<"Credit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credit findUnique
   */
  export type CreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findUniqueOrThrow
   */
  export type CreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit findFirst
   */
  export type CreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findFirstOrThrow
   */
  export type CreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credit to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credits.
     */
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit findMany
   */
  export type CreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter, which Credits to fetch.
     */
    where?: CreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credits to fetch.
     */
    orderBy?: CreditOrderByWithRelationInput | CreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credits.
     */
    cursor?: CreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credits.
     */
    skip?: number
    distinct?: CreditScalarFieldEnum | CreditScalarFieldEnum[]
  }

  /**
   * Credit create
   */
  export type CreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to create a Credit.
     */
    data: XOR<CreditCreateInput, CreditUncheckedCreateInput>
  }

  /**
   * Credit createMany
   */
  export type CreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credits.
     */
    data: CreditCreateManyInput | CreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credit update
   */
  export type CreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The data needed to update a Credit.
     */
    data: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
    /**
     * Choose, which Credit to update.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit updateMany
   */
  export type CreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credits.
     */
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyInput>
    /**
     * Filter which Credits to update
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to update.
     */
    limit?: number
  }

  /**
   * Credit upsert
   */
  export type CreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * The filter to search for the Credit to update in case it exists.
     */
    where: CreditWhereUniqueInput
    /**
     * In case the Credit found by the `where` argument doesn't exist, create a new Credit with this data.
     */
    create: XOR<CreditCreateInput, CreditUncheckedCreateInput>
    /**
     * In case the Credit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditUpdateInput, CreditUncheckedUpdateInput>
  }

  /**
   * Credit delete
   */
  export type CreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
    /**
     * Filter which Credit to delete.
     */
    where: CreditWhereUniqueInput
  }

  /**
   * Credit deleteMany
   */
  export type CreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credits to delete
     */
    where?: CreditWhereInput
    /**
     * Limit how many Credits to delete.
     */
    limit?: number
  }

  /**
   * Credit.payments
   */
  export type Credit$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * Credit without action
   */
  export type CreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credit
     */
    select?: CreditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credit
     */
    omit?: CreditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditInclude<ExtArgs> | null
  }


  /**
   * Model PaymentHistory
   */

  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryAvgAggregateOutputType = {
    id: number | null
    creditId: number | null
    userId: number | null
    installmentNumber: number | null
    amount: number | null
    interestAmount: number | null
    principalAmount: number | null
    remainingBalance: number | null
  }

  export type PaymentHistorySumAggregateOutputType = {
    id: number | null
    creditId: number | null
    userId: number | null
    installmentNumber: number | null
    amount: number | null
    interestAmount: number | null
    principalAmount: number | null
    remainingBalance: number | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: number | null
    creditId: number | null
    userId: number | null
    installmentNumber: number | null
    amount: number | null
    interestAmount: number | null
    principalAmount: number | null
    remainingBalance: number | null
    paymentDate: Date | null
    status: string | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: number | null
    creditId: number | null
    userId: number | null
    installmentNumber: number | null
    amount: number | null
    interestAmount: number | null
    principalAmount: number | null
    remainingBalance: number | null
    paymentDate: Date | null
    status: string | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    creditId: number
    userId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: number
    status: number
    _all: number
  }


  export type PaymentHistoryAvgAggregateInputType = {
    id?: true
    creditId?: true
    userId?: true
    installmentNumber?: true
    amount?: true
    interestAmount?: true
    principalAmount?: true
    remainingBalance?: true
  }

  export type PaymentHistorySumAggregateInputType = {
    id?: true
    creditId?: true
    userId?: true
    installmentNumber?: true
    amount?: true
    interestAmount?: true
    principalAmount?: true
    remainingBalance?: true
  }

  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    creditId?: true
    userId?: true
    installmentNumber?: true
    amount?: true
    interestAmount?: true
    principalAmount?: true
    remainingBalance?: true
    paymentDate?: true
    status?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    creditId?: true
    userId?: true
    installmentNumber?: true
    amount?: true
    interestAmount?: true
    principalAmount?: true
    remainingBalance?: true
    paymentDate?: true
    status?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    creditId?: true
    userId?: true
    installmentNumber?: true
    amount?: true
    interestAmount?: true
    principalAmount?: true
    remainingBalance?: true
    paymentDate?: true
    status?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithAggregationInput | PaymentHistoryOrderByWithAggregationInput[]
    by: PaymentHistoryScalarFieldEnum[] | PaymentHistoryScalarFieldEnum
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _avg?: PaymentHistoryAvgAggregateInputType
    _sum?: PaymentHistorySumAggregateInputType
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type PaymentHistoryGroupByOutputType = {
    id: number
    creditId: number
    userId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date
    status: string
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditId?: boolean
    userId?: boolean
    installmentNumber?: boolean
    amount?: boolean
    interestAmount?: boolean
    principalAmount?: boolean
    remainingBalance?: boolean
    paymentDate?: boolean
    status?: boolean
    credit?: boolean | CreditDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>



  export type PaymentHistorySelectScalar = {
    id?: boolean
    creditId?: boolean
    userId?: boolean
    installmentNumber?: boolean
    amount?: boolean
    interestAmount?: boolean
    principalAmount?: boolean
    remainingBalance?: boolean
    paymentDate?: boolean
    status?: boolean
  }

  export type PaymentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creditId" | "userId" | "installmentNumber" | "amount" | "interestAmount" | "principalAmount" | "remainingBalance" | "paymentDate" | "status", ExtArgs["result"]["paymentHistory"]>
  export type PaymentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credit?: boolean | CreditDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentHistory"
    objects: {
      credit: Prisma.$CreditPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creditId: number
      userId: number
      installmentNumber: number
      amount: number
      interestAmount: number
      principalAmount: number
      remainingBalance: number
      paymentDate: Date
      status: string
    }, ExtArgs["result"]["paymentHistory"]>
    composites: {}
  }

  type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentHistoryPayload, S>

  type PaymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentHistory'], meta: { name: 'PaymentHistory' } }
    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentHistoryFindUniqueArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentHistoryFindFirstArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentHistoryFindManyArgs>(args?: SelectSubset<T, PaymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
     */
    create<T extends PaymentHistoryCreateArgs>(args: SelectSubset<T, PaymentHistoryCreateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentHistories.
     * @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentHistoryCreateManyArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
     */
    delete<T extends PaymentHistoryDeleteArgs>(args: SelectSubset<T, PaymentHistoryDeleteArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentHistoryUpdateArgs>(args: SelectSubset<T, PaymentHistoryUpdateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(args?: SelectSubset<T, PaymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentHistoryUpdateManyArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PaymentHistoryUpsertArgs>(args: SelectSubset<T, PaymentHistoryUpsertArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentHistory model
   */
  readonly fields: PaymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credit<T extends CreditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditDefaultArgs<ExtArgs>>): Prisma__CreditClient<$Result.GetResult<Prisma.$CreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentHistory model
   */
  interface PaymentHistoryFieldRefs {
    readonly id: FieldRef<"PaymentHistory", 'Int'>
    readonly creditId: FieldRef<"PaymentHistory", 'Int'>
    readonly userId: FieldRef<"PaymentHistory", 'Int'>
    readonly installmentNumber: FieldRef<"PaymentHistory", 'Int'>
    readonly amount: FieldRef<"PaymentHistory", 'Float'>
    readonly interestAmount: FieldRef<"PaymentHistory", 'Float'>
    readonly principalAmount: FieldRef<"PaymentHistory", 'Float'>
    readonly remainingBalance: FieldRef<"PaymentHistory", 'Float'>
    readonly paymentDate: FieldRef<"PaymentHistory", 'DateTime'>
    readonly status: FieldRef<"PaymentHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentHistory findUnique
   */
  export type PaymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findFirst
   */
  export type PaymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }

  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to update.
     */
    limit?: number
  }

  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }

  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to delete.
     */
    limit?: number
  }

  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    type: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      type: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entityType: string | null
    entityId: number | null
    oldValues: string | null
    newValues: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entityType: string | null
    entityId: number | null
    oldValues: string | null
    newValues: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entityType: number
    entityId: number
    oldValues: number
    newValues: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    oldValues?: true
    newValues?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    oldValues?: true
    newValues?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    oldValues?: true
    newValues?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    entityType: string
    entityId: number | null
    oldValues: string | null
    newValues: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    oldValues?: boolean
    newValues?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    oldValues?: boolean
    newValues?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entityType" | "entityId" | "oldValues" | "newValues" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      entityType: string
      entityId: number | null
      oldValues: string | null
      newValues: string | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'Int'>
    readonly oldValues: FieldRef<"AuditLog", 'String'>
    readonly newValues: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    documentNumber: 'documentNumber',
    birthDate: 'birthDate',
    position: 'position',
    startDate: 'startDate',
    salary: 'salary',
    hasDebt: 'hasDebt',
    debtAmount: 'debtAmount',
    paidAmount: 'paidAmount',
    installmentAmount: 'installmentAmount',
    interestRate: 'interestRate',
    contractType: 'contractType',
    roleId: 'roleId',
    mustChangePassword: 'mustChangePassword',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    pendingActivation: 'pendingActivation',
    pendingApproval: 'pendingApproval',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InterestRateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rate: 'rate',
    minMonths: 'minMonths',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterestRateScalarFieldEnum = (typeof InterestRateScalarFieldEnum)[keyof typeof InterestRateScalarFieldEnum]


  export const CreditScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    creditType: 'creditType',
    loanAmount: 'loanAmount',
    installments: 'installments',
    installmentAmount: 'installmentAmount',
    outstandingAmount: 'outstandingAmount',
    paidInstallments: 'paidInstallments',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    interestRateId: 'interestRateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditScalarFieldEnum = (typeof CreditScalarFieldEnum)[keyof typeof CreditScalarFieldEnum]


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    creditId: 'creditId',
    userId: 'userId',
    installmentNumber: 'installmentNumber',
    amount: 'amount',
    interestAmount: 'interestAmount',
    principalAmount: 'principalAmount',
    remainingBalance: 'remainingBalance',
    paymentDate: 'paymentDate',
    status: 'status'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    oldValues: 'oldValues',
    newValues: 'newValues',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    permissions: 'permissions'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    documentNumber: 'documentNumber',
    position: 'position',
    contractType: 'contractType'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const InterestRateOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type InterestRateOrderByRelevanceFieldEnum = (typeof InterestRateOrderByRelevanceFieldEnum)[keyof typeof InterestRateOrderByRelevanceFieldEnum]


  export const CreditOrderByRelevanceFieldEnum: {
    creditType: 'creditType',
    status: 'status'
  };

  export type CreditOrderByRelevanceFieldEnum = (typeof CreditOrderByRelevanceFieldEnum)[keyof typeof CreditOrderByRelevanceFieldEnum]


  export const PaymentHistoryOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type PaymentHistoryOrderByRelevanceFieldEnum = (typeof PaymentHistoryOrderByRelevanceFieldEnum)[keyof typeof PaymentHistoryOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    title: 'title',
    message: 'message',
    type: 'type'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const AuditLogOrderByRelevanceFieldEnum: {
    action: 'action',
    entityType: 'entityType',
    oldValues: 'oldValues',
    newValues: 'newValues',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    permissions?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    documentNumber?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    position?: StringNullableFilter<"User"> | string | null
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    salary?: FloatNullableFilter<"User"> | number | null
    hasDebt?: BoolFilter<"User"> | boolean
    debtAmount?: FloatNullableFilter<"User"> | number | null
    paidAmount?: FloatNullableFilter<"User"> | number | null
    installmentAmount?: FloatNullableFilter<"User"> | number | null
    interestRate?: FloatNullableFilter<"User"> | number | null
    contractType?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    mustChangePassword?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    pendingActivation?: BoolFilter<"User"> | boolean
    pendingApproval?: BoolFilter<"User"> | boolean
    approvedBy?: IntNullableFilter<"User"> | number | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    credits?: CreditListRelationFilter
    payments?: PaymentHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    hasDebt?: SortOrder
    debtAmount?: SortOrderInput | SortOrder
    paidAmount?: SortOrderInput | SortOrder
    installmentAmount?: SortOrderInput | SortOrder
    interestRate?: SortOrderInput | SortOrder
    contractType?: SortOrderInput | SortOrder
    roleId?: SortOrder
    mustChangePassword?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    pendingActivation?: SortOrder
    pendingApproval?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    credits?: CreditOrderByRelationAggregateInput
    payments?: PaymentHistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    documentNumber?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    position?: StringNullableFilter<"User"> | string | null
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    salary?: FloatNullableFilter<"User"> | number | null
    hasDebt?: BoolFilter<"User"> | boolean
    debtAmount?: FloatNullableFilter<"User"> | number | null
    paidAmount?: FloatNullableFilter<"User"> | number | null
    installmentAmount?: FloatNullableFilter<"User"> | number | null
    interestRate?: FloatNullableFilter<"User"> | number | null
    contractType?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    mustChangePassword?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    pendingActivation?: BoolFilter<"User"> | boolean
    pendingApproval?: BoolFilter<"User"> | boolean
    approvedBy?: IntNullableFilter<"User"> | number | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    credits?: CreditListRelationFilter
    payments?: PaymentHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    documentNumber?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    hasDebt?: SortOrder
    debtAmount?: SortOrderInput | SortOrder
    paidAmount?: SortOrderInput | SortOrder
    installmentAmount?: SortOrderInput | SortOrder
    interestRate?: SortOrderInput | SortOrder
    contractType?: SortOrderInput | SortOrder
    roleId?: SortOrder
    mustChangePassword?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    pendingActivation?: SortOrder
    pendingApproval?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    documentNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    salary?: FloatNullableWithAggregatesFilter<"User"> | number | null
    hasDebt?: BoolWithAggregatesFilter<"User"> | boolean
    debtAmount?: FloatNullableWithAggregatesFilter<"User"> | number | null
    paidAmount?: FloatNullableWithAggregatesFilter<"User"> | number | null
    installmentAmount?: FloatNullableWithAggregatesFilter<"User"> | number | null
    interestRate?: FloatNullableWithAggregatesFilter<"User"> | number | null
    contractType?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    pendingActivation?: BoolWithAggregatesFilter<"User"> | boolean
    pendingApproval?: BoolWithAggregatesFilter<"User"> | boolean
    approvedBy?: IntNullableWithAggregatesFilter<"User"> | number | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InterestRateWhereInput = {
    AND?: InterestRateWhereInput | InterestRateWhereInput[]
    OR?: InterestRateWhereInput[]
    NOT?: InterestRateWhereInput | InterestRateWhereInput[]
    id?: IntFilter<"InterestRate"> | number
    name?: StringFilter<"InterestRate"> | string
    rate?: FloatFilter<"InterestRate"> | number
    minMonths?: IntFilter<"InterestRate"> | number
    isActive?: BoolFilter<"InterestRate"> | boolean
    createdAt?: DateTimeFilter<"InterestRate"> | Date | string
    updatedAt?: DateTimeFilter<"InterestRate"> | Date | string
    credits?: CreditListRelationFilter
  }

  export type InterestRateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: CreditOrderByRelationAggregateInput
    _relevance?: InterestRateOrderByRelevanceInput
  }

  export type InterestRateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterestRateWhereInput | InterestRateWhereInput[]
    OR?: InterestRateWhereInput[]
    NOT?: InterestRateWhereInput | InterestRateWhereInput[]
    name?: StringFilter<"InterestRate"> | string
    rate?: FloatFilter<"InterestRate"> | number
    minMonths?: IntFilter<"InterestRate"> | number
    isActive?: BoolFilter<"InterestRate"> | boolean
    createdAt?: DateTimeFilter<"InterestRate"> | Date | string
    updatedAt?: DateTimeFilter<"InterestRate"> | Date | string
    credits?: CreditListRelationFilter
  }, "id">

  export type InterestRateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterestRateCountOrderByAggregateInput
    _avg?: InterestRateAvgOrderByAggregateInput
    _max?: InterestRateMaxOrderByAggregateInput
    _min?: InterestRateMinOrderByAggregateInput
    _sum?: InterestRateSumOrderByAggregateInput
  }

  export type InterestRateScalarWhereWithAggregatesInput = {
    AND?: InterestRateScalarWhereWithAggregatesInput | InterestRateScalarWhereWithAggregatesInput[]
    OR?: InterestRateScalarWhereWithAggregatesInput[]
    NOT?: InterestRateScalarWhereWithAggregatesInput | InterestRateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InterestRate"> | number
    name?: StringWithAggregatesFilter<"InterestRate"> | string
    rate?: FloatWithAggregatesFilter<"InterestRate"> | number
    minMonths?: IntWithAggregatesFilter<"InterestRate"> | number
    isActive?: BoolWithAggregatesFilter<"InterestRate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InterestRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InterestRate"> | Date | string
  }

  export type CreditWhereInput = {
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    id?: IntFilter<"Credit"> | number
    userId?: IntFilter<"Credit"> | number
    creditType?: StringNullableFilter<"Credit"> | string | null
    loanAmount?: FloatFilter<"Credit"> | number
    installments?: IntFilter<"Credit"> | number
    installmentAmount?: FloatFilter<"Credit"> | number
    outstandingAmount?: FloatFilter<"Credit"> | number
    paidInstallments?: IntFilter<"Credit"> | number
    startDate?: DateTimeFilter<"Credit"> | Date | string
    endDate?: DateTimeFilter<"Credit"> | Date | string
    status?: StringFilter<"Credit"> | string
    interestRateId?: IntFilter<"Credit"> | number
    createdAt?: DateTimeFilter<"Credit"> | Date | string
    updatedAt?: DateTimeFilter<"Credit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interestRate?: XOR<InterestRateScalarRelationFilter, InterestRateWhereInput>
    payments?: PaymentHistoryListRelationFilter
  }

  export type CreditOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    creditType?: SortOrderInput | SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    interestRateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    interestRate?: InterestRateOrderByWithRelationInput
    payments?: PaymentHistoryOrderByRelationAggregateInput
    _relevance?: CreditOrderByRelevanceInput
  }

  export type CreditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CreditWhereInput | CreditWhereInput[]
    OR?: CreditWhereInput[]
    NOT?: CreditWhereInput | CreditWhereInput[]
    userId?: IntFilter<"Credit"> | number
    creditType?: StringNullableFilter<"Credit"> | string | null
    loanAmount?: FloatFilter<"Credit"> | number
    installments?: IntFilter<"Credit"> | number
    installmentAmount?: FloatFilter<"Credit"> | number
    outstandingAmount?: FloatFilter<"Credit"> | number
    paidInstallments?: IntFilter<"Credit"> | number
    startDate?: DateTimeFilter<"Credit"> | Date | string
    endDate?: DateTimeFilter<"Credit"> | Date | string
    status?: StringFilter<"Credit"> | string
    interestRateId?: IntFilter<"Credit"> | number
    createdAt?: DateTimeFilter<"Credit"> | Date | string
    updatedAt?: DateTimeFilter<"Credit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    interestRate?: XOR<InterestRateScalarRelationFilter, InterestRateWhereInput>
    payments?: PaymentHistoryListRelationFilter
  }, "id">

  export type CreditOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    creditType?: SortOrderInput | SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    interestRateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditCountOrderByAggregateInput
    _avg?: CreditAvgOrderByAggregateInput
    _max?: CreditMaxOrderByAggregateInput
    _min?: CreditMinOrderByAggregateInput
    _sum?: CreditSumOrderByAggregateInput
  }

  export type CreditScalarWhereWithAggregatesInput = {
    AND?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    OR?: CreditScalarWhereWithAggregatesInput[]
    NOT?: CreditScalarWhereWithAggregatesInput | CreditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Credit"> | number
    userId?: IntWithAggregatesFilter<"Credit"> | number
    creditType?: StringNullableWithAggregatesFilter<"Credit"> | string | null
    loanAmount?: FloatWithAggregatesFilter<"Credit"> | number
    installments?: IntWithAggregatesFilter<"Credit"> | number
    installmentAmount?: FloatWithAggregatesFilter<"Credit"> | number
    outstandingAmount?: FloatWithAggregatesFilter<"Credit"> | number
    paidInstallments?: IntWithAggregatesFilter<"Credit"> | number
    startDate?: DateTimeWithAggregatesFilter<"Credit"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Credit"> | Date | string
    status?: StringWithAggregatesFilter<"Credit"> | string
    interestRateId?: IntWithAggregatesFilter<"Credit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Credit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credit"> | Date | string
  }

  export type PaymentHistoryWhereInput = {
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    id?: IntFilter<"PaymentHistory"> | number
    creditId?: IntFilter<"PaymentHistory"> | number
    userId?: IntFilter<"PaymentHistory"> | number
    installmentNumber?: IntFilter<"PaymentHistory"> | number
    amount?: FloatFilter<"PaymentHistory"> | number
    interestAmount?: FloatFilter<"PaymentHistory"> | number
    principalAmount?: FloatFilter<"PaymentHistory"> | number
    remainingBalance?: FloatFilter<"PaymentHistory"> | number
    paymentDate?: DateTimeFilter<"PaymentHistory"> | Date | string
    status?: StringFilter<"PaymentHistory"> | string
    credit?: XOR<CreditScalarRelationFilter, CreditWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    credit?: CreditOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentHistoryOrderByRelevanceInput
  }

  export type PaymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    creditId?: IntFilter<"PaymentHistory"> | number
    userId?: IntFilter<"PaymentHistory"> | number
    installmentNumber?: IntFilter<"PaymentHistory"> | number
    amount?: FloatFilter<"PaymentHistory"> | number
    interestAmount?: FloatFilter<"PaymentHistory"> | number
    principalAmount?: FloatFilter<"PaymentHistory"> | number
    remainingBalance?: FloatFilter<"PaymentHistory"> | number
    paymentDate?: DateTimeFilter<"PaymentHistory"> | Date | string
    status?: StringFilter<"PaymentHistory"> | string
    credit?: XOR<CreditScalarRelationFilter, CreditWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _avg?: PaymentHistoryAvgOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
    _sum?: PaymentHistorySumOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentHistory"> | number
    creditId?: IntWithAggregatesFilter<"PaymentHistory"> | number
    userId?: IntWithAggregatesFilter<"PaymentHistory"> | number
    installmentNumber?: IntWithAggregatesFilter<"PaymentHistory"> | number
    amount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    interestAmount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    principalAmount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    remainingBalance?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
    status?: StringWithAggregatesFilter<"PaymentHistory"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: IntNullableFilter<"AuditLog"> | number | null
    oldValues?: StringNullableFilter<"AuditLog"> | string | null
    newValues?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: IntNullableFilter<"AuditLog"> | number | null
    oldValues?: StringNullableFilter<"AuditLog"> | string | null
    newValues?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    userId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    oldValues?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    newValues?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    permissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    credits?: CreditCreateNestedManyWithoutUserInput
    payments?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    roleId: number
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CreditUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    credits?: CreditUpdateManyWithoutUserNestedInput
    payments?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CreditUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    roleId: number
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestRateCreateInput = {
    name: string
    rate: number
    minMonths?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CreditCreateNestedManyWithoutInterestRateInput
  }

  export type InterestRateUncheckedCreateInput = {
    id?: number
    name: string
    rate: number
    minMonths?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CreditUncheckedCreateNestedManyWithoutInterestRateInput
  }

  export type InterestRateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    minMonths?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CreditUpdateManyWithoutInterestRateNestedInput
  }

  export type InterestRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    minMonths?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CreditUncheckedUpdateManyWithoutInterestRateNestedInput
  }

  export type InterestRateCreateManyInput = {
    id?: number
    name: string
    rate: number
    minMonths?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestRateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    minMonths?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    minMonths?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCreateInput = {
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditsInput
    interestRate: InterestRateCreateNestedOneWithoutCreditsInput
    payments?: PaymentHistoryCreateNestedManyWithoutCreditInput
  }

  export type CreditUncheckedCreateInput = {
    id?: number
    userId: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    interestRateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentHistoryUncheckedCreateNestedManyWithoutCreditInput
  }

  export type CreditUpdateInput = {
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditsNestedInput
    interestRate?: InterestRateUpdateOneRequiredWithoutCreditsNestedInput
    payments?: PaymentHistoryUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    interestRateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentHistoryUncheckedUpdateManyWithoutCreditNestedInput
  }

  export type CreditCreateManyInput = {
    id?: number
    userId: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    interestRateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditUpdateManyMutationInput = {
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    interestRateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateInput = {
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
    credit: CreditCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: number
    creditId: number
    userId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
  }

  export type PaymentHistoryUpdateInput = {
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    credit?: CreditUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: number
    creditId: number
    userId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    userId: number
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    userId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    oldValues?: string | null
    newValues?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    oldValues?: string | null
    newValues?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    oldValues?: string | null
    newValues?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type CreditListRelationFilter = {
    every?: CreditWhereInput
    some?: CreditWhereInput
    none?: CreditWhereInput
  }

  export type PaymentHistoryListRelationFilter = {
    every?: PaymentHistoryWhereInput
    some?: PaymentHistoryWhereInput
    none?: PaymentHistoryWhereInput
  }

  export type CreditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    documentNumber?: SortOrder
    birthDate?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    salary?: SortOrder
    hasDebt?: SortOrder
    debtAmount?: SortOrder
    paidAmount?: SortOrder
    installmentAmount?: SortOrder
    interestRate?: SortOrder
    contractType?: SortOrder
    roleId?: SortOrder
    mustChangePassword?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    pendingActivation?: SortOrder
    pendingApproval?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    debtAmount?: SortOrder
    paidAmount?: SortOrder
    installmentAmount?: SortOrder
    interestRate?: SortOrder
    roleId?: SortOrder
    approvedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    documentNumber?: SortOrder
    birthDate?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    salary?: SortOrder
    hasDebt?: SortOrder
    debtAmount?: SortOrder
    paidAmount?: SortOrder
    installmentAmount?: SortOrder
    interestRate?: SortOrder
    contractType?: SortOrder
    roleId?: SortOrder
    mustChangePassword?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    pendingActivation?: SortOrder
    pendingApproval?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    documentNumber?: SortOrder
    birthDate?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    salary?: SortOrder
    hasDebt?: SortOrder
    debtAmount?: SortOrder
    paidAmount?: SortOrder
    installmentAmount?: SortOrder
    interestRate?: SortOrder
    contractType?: SortOrder
    roleId?: SortOrder
    mustChangePassword?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    pendingActivation?: SortOrder
    pendingApproval?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
    debtAmount?: SortOrder
    paidAmount?: SortOrder
    installmentAmount?: SortOrder
    interestRate?: SortOrder
    roleId?: SortOrder
    approvedBy?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InterestRateOrderByRelevanceInput = {
    fields: InterestRateOrderByRelevanceFieldEnum | InterestRateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InterestRateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestRateAvgOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
  }

  export type InterestRateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestRateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestRateSumOrderByAggregateInput = {
    id?: SortOrder
    rate?: SortOrder
    minMonths?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InterestRateScalarRelationFilter = {
    is?: InterestRateWhereInput
    isNot?: InterestRateWhereInput
  }

  export type CreditOrderByRelevanceInput = {
    fields: CreditOrderByRelevanceFieldEnum | CreditOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CreditCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creditType?: SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    interestRateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    interestRateId?: SortOrder
  }

  export type CreditMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creditType?: SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    interestRateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creditType?: SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    interestRateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loanAmount?: SortOrder
    installments?: SortOrder
    installmentAmount?: SortOrder
    outstandingAmount?: SortOrder
    paidInstallments?: SortOrder
    interestRateId?: SortOrder
  }

  export type CreditScalarRelationFilter = {
    is?: CreditWhereInput
    isNot?: CreditWhereInput
  }

  export type PaymentHistoryOrderByRelevanceInput = {
    fields: PaymentHistoryOrderByRelevanceFieldEnum | PaymentHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
  }

  export type PaymentHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
    paymentDate?: SortOrder
    status?: SortOrder
  }

  export type PaymentHistorySumOrderByAggregateInput = {
    id?: SortOrder
    creditId?: SortOrder
    userId?: SortOrder
    installmentNumber?: SortOrder
    amount?: SortOrder
    interestAmount?: SortOrder
    principalAmount?: SortOrder
    remainingBalance?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type CreditCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput> | CreditCreateWithoutUserInput[] | CreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput | CreditCreateOrConnectWithoutUserInput[]
    createMany?: CreditCreateManyUserInputEnvelope
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
  }

  export type PaymentHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type CreditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput> | CreditCreateWithoutUserInput[] | CreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput | CreditCreateOrConnectWithoutUserInput[]
    createMany?: CreditCreateManyUserInputEnvelope
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type CreditUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput> | CreditCreateWithoutUserInput[] | CreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput | CreditCreateOrConnectWithoutUserInput[]
    upsert?: CreditUpsertWithWhereUniqueWithoutUserInput | CreditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCreateManyUserInputEnvelope
    set?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    disconnect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    delete?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    update?: CreditUpdateWithWhereUniqueWithoutUserInput | CreditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditUpdateManyWithWhereWithoutUserInput | CreditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditScalarWhereInput | CreditScalarWhereInput[]
  }

  export type PaymentHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutUserInput | PaymentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type CreditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput> | CreditCreateWithoutUserInput[] | CreditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutUserInput | CreditCreateOrConnectWithoutUserInput[]
    upsert?: CreditUpsertWithWhereUniqueWithoutUserInput | CreditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCreateManyUserInputEnvelope
    set?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    disconnect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    delete?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    update?: CreditUpdateWithWhereUniqueWithoutUserInput | CreditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditUpdateManyWithWhereWithoutUserInput | CreditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditScalarWhereInput | CreditScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutUserInput | PaymentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type CreditCreateNestedManyWithoutInterestRateInput = {
    create?: XOR<CreditCreateWithoutInterestRateInput, CreditUncheckedCreateWithoutInterestRateInput> | CreditCreateWithoutInterestRateInput[] | CreditUncheckedCreateWithoutInterestRateInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutInterestRateInput | CreditCreateOrConnectWithoutInterestRateInput[]
    createMany?: CreditCreateManyInterestRateInputEnvelope
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
  }

  export type CreditUncheckedCreateNestedManyWithoutInterestRateInput = {
    create?: XOR<CreditCreateWithoutInterestRateInput, CreditUncheckedCreateWithoutInterestRateInput> | CreditCreateWithoutInterestRateInput[] | CreditUncheckedCreateWithoutInterestRateInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutInterestRateInput | CreditCreateOrConnectWithoutInterestRateInput[]
    createMany?: CreditCreateManyInterestRateInputEnvelope
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CreditUpdateManyWithoutInterestRateNestedInput = {
    create?: XOR<CreditCreateWithoutInterestRateInput, CreditUncheckedCreateWithoutInterestRateInput> | CreditCreateWithoutInterestRateInput[] | CreditUncheckedCreateWithoutInterestRateInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutInterestRateInput | CreditCreateOrConnectWithoutInterestRateInput[]
    upsert?: CreditUpsertWithWhereUniqueWithoutInterestRateInput | CreditUpsertWithWhereUniqueWithoutInterestRateInput[]
    createMany?: CreditCreateManyInterestRateInputEnvelope
    set?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    disconnect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    delete?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    update?: CreditUpdateWithWhereUniqueWithoutInterestRateInput | CreditUpdateWithWhereUniqueWithoutInterestRateInput[]
    updateMany?: CreditUpdateManyWithWhereWithoutInterestRateInput | CreditUpdateManyWithWhereWithoutInterestRateInput[]
    deleteMany?: CreditScalarWhereInput | CreditScalarWhereInput[]
  }

  export type CreditUncheckedUpdateManyWithoutInterestRateNestedInput = {
    create?: XOR<CreditCreateWithoutInterestRateInput, CreditUncheckedCreateWithoutInterestRateInput> | CreditCreateWithoutInterestRateInput[] | CreditUncheckedCreateWithoutInterestRateInput[]
    connectOrCreate?: CreditCreateOrConnectWithoutInterestRateInput | CreditCreateOrConnectWithoutInterestRateInput[]
    upsert?: CreditUpsertWithWhereUniqueWithoutInterestRateInput | CreditUpsertWithWhereUniqueWithoutInterestRateInput[]
    createMany?: CreditCreateManyInterestRateInputEnvelope
    set?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    disconnect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    delete?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    connect?: CreditWhereUniqueInput | CreditWhereUniqueInput[]
    update?: CreditUpdateWithWhereUniqueWithoutInterestRateInput | CreditUpdateWithWhereUniqueWithoutInterestRateInput[]
    updateMany?: CreditUpdateManyWithWhereWithoutInterestRateInput | CreditUpdateManyWithWhereWithoutInterestRateInput[]
    deleteMany?: CreditScalarWhereInput | CreditScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreditsInput = {
    create?: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput
    connect?: UserWhereUniqueInput
  }

  export type InterestRateCreateNestedOneWithoutCreditsInput = {
    create?: XOR<InterestRateCreateWithoutCreditsInput, InterestRateUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: InterestRateCreateOrConnectWithoutCreditsInput
    connect?: InterestRateWhereUniqueInput
  }

  export type PaymentHistoryCreateNestedManyWithoutCreditInput = {
    create?: XOR<PaymentHistoryCreateWithoutCreditInput, PaymentHistoryUncheckedCreateWithoutCreditInput> | PaymentHistoryCreateWithoutCreditInput[] | PaymentHistoryUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutCreditInput | PaymentHistoryCreateOrConnectWithoutCreditInput[]
    createMany?: PaymentHistoryCreateManyCreditInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutCreditInput = {
    create?: XOR<PaymentHistoryCreateWithoutCreditInput, PaymentHistoryUncheckedCreateWithoutCreditInput> | PaymentHistoryCreateWithoutCreditInput[] | PaymentHistoryUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutCreditInput | PaymentHistoryCreateOrConnectWithoutCreditInput[]
    createMany?: PaymentHistoryCreateManyCreditInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditsInput
    upsert?: UserUpsertWithoutCreditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditsInput, UserUpdateWithoutCreditsInput>, UserUncheckedUpdateWithoutCreditsInput>
  }

  export type InterestRateUpdateOneRequiredWithoutCreditsNestedInput = {
    create?: XOR<InterestRateCreateWithoutCreditsInput, InterestRateUncheckedCreateWithoutCreditsInput>
    connectOrCreate?: InterestRateCreateOrConnectWithoutCreditsInput
    upsert?: InterestRateUpsertWithoutCreditsInput
    connect?: InterestRateWhereUniqueInput
    update?: XOR<XOR<InterestRateUpdateToOneWithWhereWithoutCreditsInput, InterestRateUpdateWithoutCreditsInput>, InterestRateUncheckedUpdateWithoutCreditsInput>
  }

  export type PaymentHistoryUpdateManyWithoutCreditNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutCreditInput, PaymentHistoryUncheckedCreateWithoutCreditInput> | PaymentHistoryCreateWithoutCreditInput[] | PaymentHistoryUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutCreditInput | PaymentHistoryCreateOrConnectWithoutCreditInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutCreditInput | PaymentHistoryUpsertWithWhereUniqueWithoutCreditInput[]
    createMany?: PaymentHistoryCreateManyCreditInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutCreditInput | PaymentHistoryUpdateWithWhereUniqueWithoutCreditInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutCreditInput | PaymentHistoryUpdateManyWithWhereWithoutCreditInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutCreditNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutCreditInput, PaymentHistoryUncheckedCreateWithoutCreditInput> | PaymentHistoryCreateWithoutCreditInput[] | PaymentHistoryUncheckedCreateWithoutCreditInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutCreditInput | PaymentHistoryCreateOrConnectWithoutCreditInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutCreditInput | PaymentHistoryUpsertWithWhereUniqueWithoutCreditInput[]
    createMany?: PaymentHistoryCreateManyCreditInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutCreditInput | PaymentHistoryUpdateWithWhereUniqueWithoutCreditInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutCreditInput | PaymentHistoryUpdateManyWithWhereWithoutCreditInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type CreditCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CreditCreateWithoutPaymentsInput, CreditUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CreditCreateOrConnectWithoutPaymentsInput
    connect?: CreditWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type CreditUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CreditCreateWithoutPaymentsInput, CreditUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CreditCreateOrConnectWithoutPaymentsInput
    upsert?: CreditUpsertWithoutPaymentsInput
    connect?: CreditWhereUniqueInput
    update?: XOR<XOR<CreditUpdateToOneWithWhereWithoutPaymentsInput, CreditUpdateWithoutPaymentsInput>, CreditUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CreditCreateNestedManyWithoutUserInput
    payments?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CreditUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    documentNumber?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    position?: StringNullableFilter<"User"> | string | null
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    salary?: FloatNullableFilter<"User"> | number | null
    hasDebt?: BoolFilter<"User"> | boolean
    debtAmount?: FloatNullableFilter<"User"> | number | null
    paidAmount?: FloatNullableFilter<"User"> | number | null
    installmentAmount?: FloatNullableFilter<"User"> | number | null
    interestRate?: FloatNullableFilter<"User"> | number | null
    contractType?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    mustChangePassword?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    pendingActivation?: BoolFilter<"User"> | boolean
    pendingApproval?: BoolFilter<"User"> | boolean
    approvedBy?: IntNullableFilter<"User"> | number | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
    permissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type CreditCreateWithoutUserInput = {
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interestRate: InterestRateCreateNestedOneWithoutCreditsInput
    payments?: PaymentHistoryCreateNestedManyWithoutCreditInput
  }

  export type CreditUncheckedCreateWithoutUserInput = {
    id?: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    interestRateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentHistoryUncheckedCreateNestedManyWithoutCreditInput
  }

  export type CreditCreateOrConnectWithoutUserInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
  }

  export type CreditCreateManyUserInputEnvelope = {
    data: CreditCreateManyUserInput | CreditCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentHistoryCreateWithoutUserInput = {
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
    credit: CreditCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    creditId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
  }

  export type PaymentHistoryCreateOrConnectWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentHistoryCreateManyUserInputEnvelope = {
    data: PaymentHistoryCreateManyUserInput | PaymentHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditWhereUniqueInput
    update: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCreateWithoutUserInput, CreditUncheckedCreateWithoutUserInput>
  }

  export type CreditUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditWhereUniqueInput
    data: XOR<CreditUpdateWithoutUserInput, CreditUncheckedUpdateWithoutUserInput>
  }

  export type CreditUpdateManyWithWhereWithoutUserInput = {
    where: CreditScalarWhereInput
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditScalarWhereInput = {
    AND?: CreditScalarWhereInput | CreditScalarWhereInput[]
    OR?: CreditScalarWhereInput[]
    NOT?: CreditScalarWhereInput | CreditScalarWhereInput[]
    id?: IntFilter<"Credit"> | number
    userId?: IntFilter<"Credit"> | number
    creditType?: StringNullableFilter<"Credit"> | string | null
    loanAmount?: FloatFilter<"Credit"> | number
    installments?: IntFilter<"Credit"> | number
    installmentAmount?: FloatFilter<"Credit"> | number
    outstandingAmount?: FloatFilter<"Credit"> | number
    paidInstallments?: IntFilter<"Credit"> | number
    startDate?: DateTimeFilter<"Credit"> | Date | string
    endDate?: DateTimeFilter<"Credit"> | Date | string
    status?: StringFilter<"Credit"> | string
    interestRateId?: IntFilter<"Credit"> | number
    createdAt?: DateTimeFilter<"Credit"> | Date | string
    updatedAt?: DateTimeFilter<"Credit"> | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutUserInput, PaymentHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutUserInput, PaymentHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentHistoryScalarWhereInput = {
    AND?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    OR?: PaymentHistoryScalarWhereInput[]
    NOT?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    id?: IntFilter<"PaymentHistory"> | number
    creditId?: IntFilter<"PaymentHistory"> | number
    userId?: IntFilter<"PaymentHistory"> | number
    installmentNumber?: IntFilter<"PaymentHistory"> | number
    amount?: FloatFilter<"PaymentHistory"> | number
    interestAmount?: FloatFilter<"PaymentHistory"> | number
    principalAmount?: FloatFilter<"PaymentHistory"> | number
    remainingBalance?: FloatFilter<"PaymentHistory"> | number
    paymentDate?: DateTimeFilter<"PaymentHistory"> | Date | string
    status?: StringFilter<"PaymentHistory"> | string
  }

  export type CreditCreateWithoutInterestRateInput = {
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditsInput
    payments?: PaymentHistoryCreateNestedManyWithoutCreditInput
  }

  export type CreditUncheckedCreateWithoutInterestRateInput = {
    id?: number
    userId: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentHistoryUncheckedCreateNestedManyWithoutCreditInput
  }

  export type CreditCreateOrConnectWithoutInterestRateInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutInterestRateInput, CreditUncheckedCreateWithoutInterestRateInput>
  }

  export type CreditCreateManyInterestRateInputEnvelope = {
    data: CreditCreateManyInterestRateInput | CreditCreateManyInterestRateInput[]
    skipDuplicates?: boolean
  }

  export type CreditUpsertWithWhereUniqueWithoutInterestRateInput = {
    where: CreditWhereUniqueInput
    update: XOR<CreditUpdateWithoutInterestRateInput, CreditUncheckedUpdateWithoutInterestRateInput>
    create: XOR<CreditCreateWithoutInterestRateInput, CreditUncheckedCreateWithoutInterestRateInput>
  }

  export type CreditUpdateWithWhereUniqueWithoutInterestRateInput = {
    where: CreditWhereUniqueInput
    data: XOR<CreditUpdateWithoutInterestRateInput, CreditUncheckedUpdateWithoutInterestRateInput>
  }

  export type CreditUpdateManyWithWhereWithoutInterestRateInput = {
    where: CreditScalarWhereInput
    data: XOR<CreditUpdateManyMutationInput, CreditUncheckedUpdateManyWithoutInterestRateInput>
  }

  export type UserCreateWithoutCreditsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    payments?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    roleId: number
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
  }

  export type InterestRateCreateWithoutCreditsInput = {
    name: string
    rate: number
    minMonths?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestRateUncheckedCreateWithoutCreditsInput = {
    id?: number
    name: string
    rate: number
    minMonths?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestRateCreateOrConnectWithoutCreditsInput = {
    where: InterestRateWhereUniqueInput
    create: XOR<InterestRateCreateWithoutCreditsInput, InterestRateUncheckedCreateWithoutCreditsInput>
  }

  export type PaymentHistoryCreateWithoutCreditInput = {
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentHistoryUncheckedCreateWithoutCreditInput = {
    id?: number
    userId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
  }

  export type PaymentHistoryCreateOrConnectWithoutCreditInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutCreditInput, PaymentHistoryUncheckedCreateWithoutCreditInput>
  }

  export type PaymentHistoryCreateManyCreditInputEnvelope = {
    data: PaymentHistoryCreateManyCreditInput | PaymentHistoryCreateManyCreditInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreditsInput = {
    update: XOR<UserUpdateWithoutCreditsInput, UserUncheckedUpdateWithoutCreditsInput>
    create: XOR<UserCreateWithoutCreditsInput, UserUncheckedCreateWithoutCreditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditsInput, UserUncheckedUpdateWithoutCreditsInput>
  }

  export type UserUpdateWithoutCreditsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    payments?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InterestRateUpsertWithoutCreditsInput = {
    update: XOR<InterestRateUpdateWithoutCreditsInput, InterestRateUncheckedUpdateWithoutCreditsInput>
    create: XOR<InterestRateCreateWithoutCreditsInput, InterestRateUncheckedCreateWithoutCreditsInput>
    where?: InterestRateWhereInput
  }

  export type InterestRateUpdateToOneWithWhereWithoutCreditsInput = {
    where?: InterestRateWhereInput
    data: XOR<InterestRateUpdateWithoutCreditsInput, InterestRateUncheckedUpdateWithoutCreditsInput>
  }

  export type InterestRateUpdateWithoutCreditsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    minMonths?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestRateUncheckedUpdateWithoutCreditsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rate?: FloatFieldUpdateOperationsInput | number
    minMonths?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutCreditInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutCreditInput, PaymentHistoryUncheckedUpdateWithoutCreditInput>
    create: XOR<PaymentHistoryCreateWithoutCreditInput, PaymentHistoryUncheckedCreateWithoutCreditInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutCreditInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutCreditInput, PaymentHistoryUncheckedUpdateWithoutCreditInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutCreditInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutCreditInput>
  }

  export type CreditCreateWithoutPaymentsInput = {
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditsInput
    interestRate: InterestRateCreateNestedOneWithoutCreditsInput
  }

  export type CreditUncheckedCreateWithoutPaymentsInput = {
    id?: number
    userId: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    interestRateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCreateOrConnectWithoutPaymentsInput = {
    where: CreditWhereUniqueInput
    create: XOR<CreditCreateWithoutPaymentsInput, CreditUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    credits?: CreditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    roleId: number
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: CreditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type CreditUpsertWithoutPaymentsInput = {
    update: XOR<CreditUpdateWithoutPaymentsInput, CreditUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CreditCreateWithoutPaymentsInput, CreditUncheckedCreateWithoutPaymentsInput>
    where?: CreditWhereInput
  }

  export type CreditUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CreditWhereInput
    data: XOR<CreditUpdateWithoutPaymentsInput, CreditUncheckedUpdateWithoutPaymentsInput>
  }

  export type CreditUpdateWithoutPaymentsInput = {
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditsNestedInput
    interestRate?: InterestRateUpdateOneRequiredWithoutCreditsNestedInput
  }

  export type CreditUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    interestRateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    credits?: CreditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CreditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    documentNumber?: string | null
    birthDate?: Date | string | null
    position?: string | null
    startDate?: Date | string | null
    salary?: number | null
    hasDebt?: boolean
    debtAmount?: number | null
    paidAmount?: number | null
    installmentAmount?: number | null
    interestRate?: number | null
    contractType?: string | null
    mustChangePassword?: boolean
    isActive?: boolean
    emailVerified?: boolean
    pendingActivation?: boolean
    pendingApproval?: boolean
    approvedBy?: number | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CreditUpdateManyWithoutUserNestedInput
    payments?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: CreditUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    documentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    hasDebt?: BoolFieldUpdateOperationsInput | boolean
    debtAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    paidAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    installmentAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    contractType?: NullableStringFieldUpdateOperationsInput | string | null
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    pendingActivation?: BoolFieldUpdateOperationsInput | boolean
    pendingApproval?: BoolFieldUpdateOperationsInput | boolean
    approvedBy?: NullableIntFieldUpdateOperationsInput | number | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCreateManyUserInput = {
    id?: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    interestRateId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentHistoryCreateManyUserInput = {
    id?: number
    creditId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
  }

  export type CreditUpdateWithoutUserInput = {
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interestRate?: InterestRateUpdateOneRequiredWithoutCreditsNestedInput
    payments?: PaymentHistoryUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    interestRateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentHistoryUncheckedUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    interestRateId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpdateWithoutUserInput = {
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    credit?: CreditUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditId?: IntFieldUpdateOperationsInput | number
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditId?: IntFieldUpdateOperationsInput | number
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CreditCreateManyInterestRateInput = {
    id?: number
    userId: number
    creditType?: string | null
    loanAmount: number
    installments: number
    installmentAmount: number
    outstandingAmount: number
    paidInstallments?: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditUpdateWithoutInterestRateInput = {
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditsNestedInput
    payments?: PaymentHistoryUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateWithoutInterestRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentHistoryUncheckedUpdateManyWithoutCreditNestedInput
  }

  export type CreditUncheckedUpdateManyWithoutInterestRateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creditType?: NullableStringFieldUpdateOperationsInput | string | null
    loanAmount?: FloatFieldUpdateOperationsInput | number
    installments?: IntFieldUpdateOperationsInput | number
    installmentAmount?: FloatFieldUpdateOperationsInput | number
    outstandingAmount?: FloatFieldUpdateOperationsInput | number
    paidInstallments?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyCreditInput = {
    id?: number
    userId: number
    installmentNumber: number
    amount: number
    interestAmount: number
    principalAmount: number
    remainingBalance: number
    paymentDate: Date | string
    status?: string
  }

  export type PaymentHistoryUpdateWithoutCreditInput = {
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutCreditInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutCreditInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    installmentNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    interestAmount?: FloatFieldUpdateOperationsInput | number
    principalAmount?: FloatFieldUpdateOperationsInput | number
    remainingBalance?: FloatFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}