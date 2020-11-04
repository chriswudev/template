export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  geography: any;
  geometry: any;
  timestamptz: any;
  uuid: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  insert_blank_user?: Maybe<Random_User>;
  join_trip?: Maybe<Scalars['Int']>;
  sign_generic_upload?: Maybe<Upload_Token>;
  sign_post?: Maybe<Upload_Token>;
  sign_profile_picture?: Maybe<Upload_Token>;
  sign_trip_picture?: Maybe<Upload_Token>;
};


export type MutationInsert_Blank_UserArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationJoin_TripArgs = {
  invite_code: Scalars['String'];
};


export type MutationSign_PostArgs = {
  save_to_trip?: Maybe<Scalars['Int']>;
};


export type MutationSign_Trip_PictureArgs = {
  trip_id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  find_trip?: Maybe<H_Trip>;
  for_you_feed: Array<Feed_Post>;
};


export type QueryFind_TripArgs = {
  invite_code: Scalars['String'];
};


export type QueryFor_You_FeedArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
  stddev?: Maybe<Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Comments_Sum_Fields>;
  var_pop?: Maybe<Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Comments_Var_Samp_Fields>;
  variance?: Maybe<Comments_Variance_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: Maybe<Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
  stddev?: Maybe<Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Comments_Sum_Order_By>;
  var_pop?: Maybe<Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Comments_Var_Samp_Order_By>;
  variance?: Maybe<Comments_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "email_list.contact_form" */
export type Email_List_Contact_Form_Arr_Rel_Insert_Input = {
  data: Array<Email_List_Contact_Form_Insert_Input>;
};

/** input type for inserting data into table "email_list.contact_form" */
export type Email_List_Contact_Form_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "email_list.contact_form" */
export type Email_List_Contact_Form_Mutation_Response = {
  __typename?: 'email_list_contact_form_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
};

/** input type for inserting object relation for remote table "email_list.contact_form" */
export type Email_List_Contact_Form_Obj_Rel_Insert_Input = {
  data: Email_List_Contact_Form_Insert_Input;
};

/** input type for inserting array relation for remote table "email_list.emails" */
export type Email_List_Emails_Arr_Rel_Insert_Input = {
  data: Array<Email_List_Emails_Insert_Input>;
};

/** input type for inserting data into table "email_list.emails" */
export type Email_List_Emails_Insert_Input = {
  address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "email_list.emails" */
export type Email_List_Emails_Mutation_Response = {
  __typename?: 'email_list_emails_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
};

/** input type for inserting object relation for remote table "email_list.emails" */
export type Email_List_Emails_Obj_Rel_Insert_Input = {
  data: Email_List_Emails_Insert_Input;
};

/** input type for inserting array relation for remote table "email_list.pitch_deck_request" */
export type Email_List_Pitch_Deck_Request_Arr_Rel_Insert_Input = {
  data: Array<Email_List_Pitch_Deck_Request_Insert_Input>;
};

/** input type for inserting data into table "email_list.pitch_deck_request" */
export type Email_List_Pitch_Deck_Request_Insert_Input = {
  email?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "email_list.pitch_deck_request" */
export type Email_List_Pitch_Deck_Request_Mutation_Response = {
  __typename?: 'email_list_pitch_deck_request_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
};

/** input type for inserting object relation for remote table "email_list.pitch_deck_request" */
export type Email_List_Pitch_Deck_Request_Obj_Rel_Insert_Input = {
  data: Email_List_Pitch_Deck_Request_Insert_Input;
};

export type Error = {
  __typename?: 'error';
  message: Scalars['String'];
};

export type Feed_Post = {
  __typename?: 'feed_post';
  admin_area?: Maybe<Scalars['String']>;
  comments_aggregate?: Maybe<H_Count_Aggregate>;
  country?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  location_name: Scalars['String'];
  media: Scalars['String'];
  saves: Array<Maybe<H_Saves>>;
  saves_aggregate?: Maybe<H_Count_Aggregate>;
  shares_aggregate?: Maybe<H_Count_Aggregate>;
  thumbnail: Scalars['String'];
  user?: Maybe<H_User>;
  watermark?: Maybe<Scalars['String']>;
};


export type Feed_PostSavesArgs = {
  limit?: Maybe<Scalars['Int']>;
  where?: Maybe<H_Saves_Bool_Exp>;
};

/** columns and relationships of "followers" */
export type Followers = {
  __typename?: 'followers';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower: Scalars['String'];
  /** An object relationship */
  follower_user: Users;
  /** An object relationship */
  following_user: Users;
  follows: Scalars['String'];
};

/** aggregated selection of "followers" */
export type Followers_Aggregate = {
  __typename?: 'followers_aggregate';
  aggregate?: Maybe<Followers_Aggregate_Fields>;
  nodes: Array<Followers>;
};

/** aggregate fields of "followers" */
export type Followers_Aggregate_Fields = {
  __typename?: 'followers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Followers_Max_Fields>;
  min?: Maybe<Followers_Min_Fields>;
};


/** aggregate fields of "followers" */
export type Followers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Followers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "followers" */
export type Followers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Followers_Max_Order_By>;
  min?: Maybe<Followers_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "followers". All fields are combined with a logical 'AND'. */
export type Followers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Followers_Bool_Exp>>>;
  _not?: Maybe<Followers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Followers_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  follower?: Maybe<String_Comparison_Exp>;
  follower_user?: Maybe<Users_Bool_Exp>;
  following_user?: Maybe<Users_Bool_Exp>;
  follows?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Followers_Max_Fields = {
  __typename?: 'followers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower?: Maybe<Scalars['String']>;
  follows?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "followers" */
export type Followers_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  follower?: Maybe<Order_By>;
  follows?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Followers_Min_Fields = {
  __typename?: 'followers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower?: Maybe<Scalars['String']>;
  follows?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "followers" */
export type Followers_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  follower?: Maybe<Order_By>;
  follows?: Maybe<Order_By>;
};

/** ordering options when selecting data from "followers" */
export type Followers_Order_By = {
  created_at?: Maybe<Order_By>;
  follower?: Maybe<Order_By>;
  follower_user?: Maybe<Users_Order_By>;
  following_user?: Maybe<Users_Order_By>;
  follows?: Maybe<Order_By>;
};

/** primary key columns input for table: "followers" */
export type Followers_Pk_Columns_Input = {
  follower: Scalars['String'];
  follows: Scalars['String'];
};

/** select columns of table "followers" */
export enum Followers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Follower = 'follower',
  /** column name */
  Follows = 'follows'
}

export type For_You_Args = {
  uid?: Maybe<Scalars['String']>;
};


/** Expression to compare the result of casting a column of type geography. Multiple cast targets are combined with logical 'AND'. */
export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a distance from a geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};


/** Expression to compare the result of casting a column of type geometry. Multiple cast targets are combined with logical 'AND'. */
export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column crosses the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a distance from a geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value. Directionality is ignored */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

export type H_String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type H_Count = {
  __typename?: 'h_count';
  count: Scalars['Int'];
};

export type H_Count_Aggregate = {
  __typename?: 'h_count_aggregate';
  aggregate?: Maybe<H_Count>;
};

export type H_Saves = {
  __typename?: 'h_saves';
  created_at?: Maybe<Scalars['String']>;
};

export type H_Saves_Bool_Exp = {
  user_id?: Maybe<H_String_Comparison_Exp>;
};

export type H_Trip = {
  __typename?: 'h_trip';
  archived: Scalars['Boolean'];
  created_at: Scalars['String'];
  display_picture: Scalars['String'];
  first_10_members: Array<H_User_Trip>;
  id: Scalars['Int'];
  num_members: H_User_Trips_Aggregate;
  owner: Scalars['String'];
  title: Scalars['String'];
};

export type H_User = {
  __typename?: 'h_user';
  display_name: Scalars['String'];
  display_picture: Scalars['String'];
  username: Scalars['String'];
};

export type H_User_Trip = {
  __typename?: 'h_user_trip';
  user: H_User;
};

export type H_User_Trips_Aggregate = {
  __typename?: 'h_user_trips_aggregate';
  aggregate: H_User_Trips_Aggregate_Fields;
};

export type H_User_Trips_Aggregate_Fields = {
  __typename?: 'h_user_trips_aggregate_fields';
  count: Scalars['Int'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  insert_blank_user?: Maybe<Random_User>;
  /** insert data into the table: "email_list.contact_form" */
  insert_email_list_contact_form?: Maybe<Email_List_Contact_Form_Mutation_Response>;
  /** insert data into the table: "email_list.emails" */
  insert_email_list_emails?: Maybe<Email_List_Emails_Mutation_Response>;
  /** insert data into the table: "email_list.pitch_deck_request" */
  insert_email_list_pitch_deck_request?: Maybe<Email_List_Pitch_Deck_Request_Mutation_Response>;
  join_trip?: Maybe<Scalars['Int']>;
  sign_generic_upload?: Maybe<Upload_Token>;
  sign_post?: Maybe<Upload_Token>;
  sign_profile_picture?: Maybe<Upload_Token>;
  sign_trip_picture?: Maybe<Upload_Token>;
};


/** mutation root */
export type Mutation_RootInsert_Blank_UserArgs = {
  name?: Maybe<Scalars['String']>;
};


/** mutation root */
export type Mutation_RootInsert_Email_List_Contact_FormArgs = {
  objects: Array<Email_List_Contact_Form_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Email_List_EmailsArgs = {
  objects: Array<Email_List_Emails_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Email_List_Pitch_Deck_RequestArgs = {
  objects: Array<Email_List_Pitch_Deck_Request_Insert_Input>;
};


/** mutation root */
export type Mutation_RootJoin_TripArgs = {
  invite_code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSign_PostArgs = {
  save_to_trip?: Maybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootSign_Trip_PictureArgs = {
  trip_id: Scalars['Int'];
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  admin_area?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  desc: Scalars['String'];
  external_link?: Maybe<Scalars['String']>;
  google_place_id: Scalars['String'];
  id: Scalars['uuid'];
  location: Scalars['geography'];
  location_name: Scalars['String'];
  media: Scalars['String'];
  preview?: Maybe<Scalars['String']>;
  /** An array relationship */
  saves: Array<Saves>;
  /** An aggregated array relationship */
  saves_aggregate: Saves_Aggregate;
  /** An array relationship */
  shares: Array<Shares>;
  /** An aggregated array relationship */
  shares_aggregate: Shares_Aggregate;
  thumbnail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
  watermark?: Maybe<Scalars['String']>;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsSavesArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsSaves_AggregateArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsSharesArgs = {
  distinct_on?: Maybe<Array<Shares_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shares_Order_By>>;
  where?: Maybe<Shares_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsShares_AggregateArgs = {
  distinct_on?: Maybe<Array<Shares_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shares_Order_By>>;
  where?: Maybe<Shares_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  admin_area?: Maybe<String_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  desc?: Maybe<String_Comparison_Exp>;
  external_link?: Maybe<String_Comparison_Exp>;
  google_place_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<Geography_Comparison_Exp>;
  location_name?: Maybe<String_Comparison_Exp>;
  media?: Maybe<String_Comparison_Exp>;
  preview?: Maybe<String_Comparison_Exp>;
  saves?: Maybe<Saves_Bool_Exp>;
  shares?: Maybe<Shares_Bool_Exp>;
  thumbnail?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  watermark?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
  admin_area?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  desc?: Maybe<Order_By>;
  external_link?: Maybe<Order_By>;
  google_place_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  location_name?: Maybe<Order_By>;
  media?: Maybe<Order_By>;
  preview?: Maybe<Order_By>;
  saves_aggregate?: Maybe<Saves_Aggregate_Order_By>;
  shares_aggregate?: Maybe<Shares_Aggregate_Order_By>;
  thumbnail?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  watermark?: Maybe<Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AdminArea = 'admin_area',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Desc = 'desc',
  /** column name */
  ExternalLink = 'external_link',
  /** column name */
  GooglePlaceId = 'google_place_id',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  LocationName = 'location_name',
  /** column name */
  Media = 'media',
  /** column name */
  Preview = 'preview',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Watermark = 'watermark'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  find_trip?: Maybe<H_Trip>;
  /** fetch data from the table: "followers" */
  followers: Array<Followers>;
  /** fetch aggregated fields from the table: "followers" */
  followers_aggregate: Followers_Aggregate;
  /** fetch data from the table: "followers" using primary key columns */
  followers_by_pk?: Maybe<Followers>;
  /** execute function "for_you" which returns "posts" */
  for_you: Array<Posts>;
  for_you_feed: Array<Feed_Post>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "saves" */
  saves: Array<Saves>;
  /** fetch aggregated fields from the table: "saves" */
  saves_aggregate: Saves_Aggregate;
  /** fetch data from the table: "saves" using primary key columns */
  saves_by_pk?: Maybe<Saves>;
  /** fetch data from the table: "shares" */
  shares: Array<Shares>;
  /** fetch aggregated fields from the table: "shares" */
  shares_aggregate: Shares_Aggregate;
  /** fetch data from the table: "shares" using primary key columns */
  shares_by_pk?: Maybe<Shares>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootFind_TripArgs = {
  invite_code: Scalars['String'];
};


/** query root */
export type Query_RootFollowersArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** query root */
export type Query_RootFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** query root */
export type Query_RootFollowers_By_PkArgs = {
  follower: Scalars['String'];
  follows: Scalars['String'];
};


/** query root */
export type Query_RootFor_YouArgs = {
  args: For_You_Args;
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootFor_You_FeedArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSavesArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** query root */
export type Query_RootSaves_AggregateArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** query root */
export type Query_RootSaves_By_PkArgs = {
  post_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootSharesArgs = {
  distinct_on?: Maybe<Array<Shares_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shares_Order_By>>;
  where?: Maybe<Shares_Bool_Exp>;
};


/** query root */
export type Query_RootShares_AggregateArgs = {
  distinct_on?: Maybe<Array<Shares_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shares_Order_By>>;
  where?: Maybe<Shares_Bool_Exp>;
};


/** query root */
export type Query_RootShares_By_PkArgs = {
  post_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Random_User = {
  __typename?: 'random_user';
  bio?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  display_name: Scalars['String'];
  display_picture: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

/** columns and relationships of "saves" */
export type Saves = {
  __typename?: 'saves';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "saves" */
export type Saves_Aggregate = {
  __typename?: 'saves_aggregate';
  aggregate?: Maybe<Saves_Aggregate_Fields>;
  nodes: Array<Saves>;
};

/** aggregate fields of "saves" */
export type Saves_Aggregate_Fields = {
  __typename?: 'saves_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Saves_Max_Fields>;
  min?: Maybe<Saves_Min_Fields>;
};


/** aggregate fields of "saves" */
export type Saves_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Saves_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "saves" */
export type Saves_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Saves_Max_Order_By>;
  min?: Maybe<Saves_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "saves". All fields are combined with a logical 'AND'. */
export type Saves_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Saves_Bool_Exp>>>;
  _not?: Maybe<Saves_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Saves_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Saves_Max_Fields = {
  __typename?: 'saves_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "saves" */
export type Saves_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Saves_Min_Fields = {
  __typename?: 'saves_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "saves" */
export type Saves_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "saves" */
export type Saves_Order_By = {
  created_at?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "saves" */
export type Saves_Pk_Columns_Input = {
  post_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "saves" */
export enum Saves_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id'
}

/**
 * track number of shares to display
 * 
 * 
 * columns and relationships of "shares"
 */
export type Shares = {
  __typename?: 'shares';
  /** An object relationship */
  post: Posts;
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "shares" */
export type Shares_Aggregate = {
  __typename?: 'shares_aggregate';
  aggregate?: Maybe<Shares_Aggregate_Fields>;
  nodes: Array<Shares>;
};

/** aggregate fields of "shares" */
export type Shares_Aggregate_Fields = {
  __typename?: 'shares_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
};


/** aggregate fields of "shares" */
export type Shares_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shares_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shares" */
export type Shares_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shares". All fields are combined with a logical 'AND'. */
export type Shares_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Shares_Bool_Exp>>>;
  _not?: Maybe<Shares_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Shares_Bool_Exp>>>;
  post?: Maybe<Posts_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "shares" */
export type Shares_Order_By = {
  post?: Maybe<Posts_Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "shares" */
export type Shares_Pk_Columns_Input = {
  post_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "shares" */
export enum Shares_Select_Column {}

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "followers" */
  followers: Array<Followers>;
  /** fetch aggregated fields from the table: "followers" */
  followers_aggregate: Followers_Aggregate;
  /** fetch data from the table: "followers" using primary key columns */
  followers_by_pk?: Maybe<Followers>;
  /** execute function "for_you" which returns "posts" */
  for_you: Array<Posts>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "saves" */
  saves: Array<Saves>;
  /** fetch aggregated fields from the table: "saves" */
  saves_aggregate: Saves_Aggregate;
  /** fetch data from the table: "saves" using primary key columns */
  saves_by_pk?: Maybe<Saves>;
  /** fetch data from the table: "shares" */
  shares: Array<Shares>;
  /** fetch aggregated fields from the table: "shares" */
  shares_aggregate: Shares_Aggregate;
  /** fetch data from the table: "shares" using primary key columns */
  shares_by_pk?: Maybe<Shares>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootFollowersArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowers_By_PkArgs = {
  follower: Scalars['String'];
  follows: Scalars['String'];
};


/** subscription root */
export type Subscription_RootFor_YouArgs = {
  args: For_You_Args;
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSavesArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSaves_AggregateArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSaves_By_PkArgs = {
  post_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootSharesArgs = {
  distinct_on?: Maybe<Array<Shares_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shares_Order_By>>;
  where?: Maybe<Shares_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootShares_AggregateArgs = {
  distinct_on?: Maybe<Array<Shares_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shares_Order_By>>;
  where?: Maybe<Shares_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootShares_By_PkArgs = {
  post_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Upload_Token = {
  __typename?: 'upload_token';
  message: Scalars['String'];
  signature: Scalars['String'];
};

export enum User_Level_Enum {
  /** verified business profile */
  Business = 'business',
  /** standard user profile */
  User = 'user',
  /** verified user profile */
  Verified = 'verified'
}

/** expression to compare columns of type user_level_enum. All fields are combined with logical 'AND'. */
export type User_Level_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Level_Enum>;
  _in?: Maybe<Array<User_Level_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Level_Enum>;
  _nin?: Maybe<Array<User_Level_Enum>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  bio?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  display_picture: Scalars['String'];
  /** An array relationship */
  followers: Array<Followers>;
  /** An array relationship */
  followersByFollows: Array<Followers>;
  /** An aggregated array relationship */
  followersByFollows_aggregate: Followers_Aggregate;
  /** An aggregated array relationship */
  followers_aggregate: Followers_Aggregate;
  id: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An array relationship */
  saves: Array<Saves>;
  /** An aggregated array relationship */
  saves_aggregate: Saves_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_level?: Maybe<User_Level_Enum>;
  username: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowersArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowersByFollowsArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowersByFollows_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSavesArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSaves_AggregateArgs = {
  distinct_on?: Maybe<Array<Saves_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Saves_Order_By>>;
  where?: Maybe<Saves_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  bio?: Maybe<String_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  display_picture?: Maybe<String_Comparison_Exp>;
  followers?: Maybe<Followers_Bool_Exp>;
  followersByFollows?: Maybe<Followers_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  instagram?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
  saves?: Maybe<Saves_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_level?: Maybe<User_Level_Enum_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
  youtube?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  bio?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  display_picture?: Maybe<Order_By>;
  followersByFollows_aggregate?: Maybe<Followers_Aggregate_Order_By>;
  followers_aggregate?: Maybe<Followers_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  instagram?: Maybe<Order_By>;
  saves_aggregate?: Maybe<Saves_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_level?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
  youtube?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  DisplayPicture = 'display_picture',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserLevel = 'user_level',
  /** column name */
  Username = 'username',
  /** column name */
  Website = 'website',
  /** column name */
  Youtube = 'youtube'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
