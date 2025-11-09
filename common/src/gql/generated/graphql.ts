/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any }
}

export type AccessGroup = {
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  entityId: Scalars['ID']['output']
  entityType: AccessGroupEntityType
  id: Scalars['ID']['output']
  info?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  networkId: Scalars['ID']['output']
  type: Scalars['String']['output']
}

export enum AccessGroupEntityType {
  network = 'network',
  post = 'post',
  space = 'space',
}

export type Action = {
  status: ActionStatus
}

export type ActionPermissions = {
  inputPermissions: Array<InputPathPermissions>
  isAuthorized: IsAuthorized
  name: Scalars['String']['output']
  outputPermissions: Array<PathPermissions>
}

export enum ActionStatus {
  failed = 'failed',
  succeeded = 'succeeded',
}

export type ActiveSso = {
  logoutUrl?: Maybe<Scalars['String']['output']>
  settingsUrl?: Maybe<Scalars['String']['output']>
}

export type AddAppCollaboratorInput = {
  email: Scalars['String']['input']
}

export type AddMediasInput = {
  contentTypes: Array<Scalars['String']['input']>
}

export type AddMembersToGroupInput = {
  /** Member IDs to add to the group. Only 10 members can be added at a time. This limit does not apply to staff members. */
  memberIds: Array<Scalars['String']['input']>
}

export type AddNetworkInput = {
  description?: InputMaybe<Scalars['String']['input']>
  domain?: InputMaybe<Scalars['String']['input']>
  entrancePage?: InputMaybe<Scalars['String']['input']>
  faviconId?: InputMaybe<Scalars['String']['input']>
  gclid?: InputMaybe<Scalars['String']['input']>
  industry?: InputMaybe<NetworkIndustryType>
  name: Scalars['String']['input']
  owner: JoinNetworkInput
  primaryMembers?: InputMaybe<NetworkPrimaryMembersType>
  promoCode?: InputMaybe<Scalars['String']['input']>
  referrer?: InputMaybe<Scalars['String']['input']>
  timeframe?: InputMaybe<NetworkTimeframeType>
  utmCampaign?: InputMaybe<Scalars['String']['input']>
  utmContent?: InputMaybe<Scalars['String']['input']>
  utmMedium?: InputMaybe<Scalars['String']['input']>
  utmSource?: InputMaybe<Scalars['String']['input']>
  utmTerm?: InputMaybe<Scalars['String']['input']>
  visibility?: NetworkVisibility
}

export type AddReactionInput = {
  overrideSingleChoiceReactions?: InputMaybe<Scalars['Boolean']['input']>
  participantId?: InputMaybe<Scalars['ID']['input']>
  reaction: Scalars['String']['input']
}

export type AddSpaceMemberInput = {
  memberId: Scalars['ID']['input']
  roleId?: InputMaybe<Scalars['ID']['input']>
}

export type AddedParticipantsMetadata = {
  addedParticipants: Array<ChatParticipant>
  type: ChatLogType
}

export type AddonInformation = {
  priceId: Scalars['String']['output']
  productId: Scalars['String']['output']
  quantity: Scalars['Float']['output']
}

export type AdvanceReadMessageOffsetInput = {
  messageId: Scalars['String']['input']
  pageId: Scalars['String']['input']
  /** The address signature of the message that was provided as part of the server response. The operation will fail if signature is invalid. */
  signature: Scalars['String']['input']
}

export type AdvanceReadMessageOffsetResult = {
  /** Whether the operation changed the offset or not. It will be false, if client tries to backdate the offset. */
  changed: Scalars['Boolean']['output']
  /** The ID of the chat */
  chatId: Scalars['String']['output']
  /** Number of unread message in the chat after the advancing the offset. */
  count?: Maybe<Scalars['Int']['output']>
}

export type AnalyticsLimits = {
  /** @deprecated This resolver will be removed in the next version */
  planLimits?: Maybe<Array<AnalyticsPlanLimits>>
}

export type AnalyticsPlanLimits = {
  /** @deprecated This field will be removed in the next version */
  daysLimitation?: Maybe<Scalars['Float']['output']>
  /** @deprecated This field will be removed in the next version */
  plan?: Maybe<Scalars['String']['output']>
}

export type AnalyticsQueryTimeframe = {
  from: Scalars['Float']['output']
  to: Scalars['Float']['output']
}

export type AnalyticsResponse = {
  maxCacheTime: Scalars['Float']['output']
  query: Scalars['String']['output']
  records: Array<ReportRecord>
  timeframe: AnalyticsQueryTimeframe
}

export type ApiRateLimitStat = {
  consumableType: ApiRequestLimitType
  consumedPoints: Scalars['Float']['output']
  duration: Scalars['Float']['output']
  limit: Scalars['Float']['output']
  remainingPoints: Scalars['Float']['output']
  resetsAt: Scalars['DateTime']['output']
}

export type ApiRequestLimit = {
  consumableType: ApiRequestLimitType
  duration: Scalars['Float']['output']
  limit: Scalars['Float']['output']
}

export enum ApiRequestLimitType {
  Complexity = 'Complexity',
  Request = 'Request',
}

export type App = {
  about?: Maybe<Scalars['String']['output']>
  authMemberInstallation?: Maybe<AppInstallation>
  authorName?: Maybe<Scalars['String']['output']>
  authorUrl?: Maybe<Scalars['String']['output']>
  banner?: Maybe<Media>
  bannerId?: Maybe<Scalars['ID']['output']>
  clientId?: Maybe<Scalars['String']['output']>
  clientSecret?: Maybe<Scalars['String']['output']>
  comingSoon: Scalars['Boolean']['output']
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<Member>
  createdById?: Maybe<Scalars['ID']['output']>
  customCodes?: Maybe<AppCustomCodes>
  description?: Maybe<Scalars['String']['output']>
  docsUrl?: Maybe<Scalars['String']['output']>
  dynamicBlocks?: Maybe<Array<DynamicBlock>>
  embedIds: Array<Scalars['ID']['output']>
  embeds?: Maybe<Array<Embed>>
  /** @deprecated Apps will be only installed on the network level */
  enabledContexts?: Maybe<Array<PermissionContext>>
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  federatedSearchEnabled: Scalars['Boolean']['output']
  globalBanner?: Maybe<Media>
  globalEmbeds?: Maybe<Array<Embed>>
  globalFavicon?: Maybe<Media>
  globalImage?: Maybe<Media>
  globalImages?: Maybe<Array<Media>>
  /** @deprecated Use the global gateway instead */
  globalNetwork?: Maybe<PluralNetwork>
  id: Scalars['ID']['output']
  image?: Maybe<Media>
  imageId?: Maybe<Scalars['ID']['output']>
  imageIds: Array<Scalars['ID']['output']>
  images?: Maybe<Array<Media>>
  installed?: Maybe<Scalars['Boolean']['output']>
  /** Whether the app is a consent management platform */
  isConsentManagementPlatform?: Maybe<Scalars['Boolean']['output']>
  locked: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  network?: Maybe<Network>
  networkId: Scalars['ID']['output']
  onFreePlan?: Maybe<Scalars['Boolean']['output']>
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>
  privatelyPublished?: Maybe<Scalars['Boolean']['output']>
  requiredPermissions: Array<PrimaryScopes>
  secretToken?: Maybe<Scalars['String']['output']>
  settingsBlock?: Maybe<DynamicBlock>
  slug: Scalars['String']['output']
  standing: StoreItemStanding
  status: StoreItemStatus
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  updatedBy?: Maybe<Member>
  updatedById?: Maybe<Scalars['ID']['output']>
  webhookSignSecret?: Maybe<Scalars['String']['output']>
  webhookSubscriptions?: Maybe<Array<Scalars['String']['output']>>
  webhookUrl?: Maybe<Scalars['String']['output']>
}

export type AppAction = {
  data?: Maybe<Scalars['String']['output']>
  status: ActionStatus
}

export type AppCollaborator = {
  addedById?: Maybe<Scalars['ID']['output']>
  /** @deprecated Use the global gateway instead */
  app?: Maybe<App>
  appId: Scalars['ID']['output']
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  type: AppCollaboratorType
}

export enum AppCollaboratorType {
  COLLABORATOR = 'COLLABORATOR',
  OWNER = 'OWNER',
}

export type AppCustomCodes = {
  body?: Maybe<Scalars['String']['output']>
  head?: Maybe<Scalars['String']['output']>
}

export type AppEdge = {
  cursor: Scalars['String']['output']
  node: App
}

export type AppInstallation = {
  app?: Maybe<App>
  appVersion?: Maybe<Scalars['String']['output']>
  /** @deprecated Apps will be only installed on the network level */
  context?: Maybe<PermissionContext>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  installedAt: Scalars['DateTime']['output']
  installedBy?: Maybe<Member>
  network?: Maybe<Network>
  permissions: Array<Scalars['String']['output']>
  status: AppInstallationStatus
  templatesMappings?: Maybe<AppInstallationTemplatesMappings>
  updatedAt: Scalars['DateTime']['output']
}

export type AppInstallationEdge = {
  cursor: Scalars['String']['output']
  node: AppInstallation
}

export enum AppInstallationStatus {
  DELETED = 'DELETED',
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
}

export type AppInstallationTemplatesMappings = {
  member?: Maybe<Array<TemplatesMapping>>
  postTypes?: Maybe<Array<TemplatesMapping>>
}

export type AppInstallationTemplatesMappingsInput = {
  memberTypes?: InputMaybe<Array<TemplatesMappingInput>>
  postTypes?: InputMaybe<Array<TemplatesMappingInput>>
}

export type AppInteraction = {
  appId: Scalars['String']['output']
  interactionId: Scalars['String']['output']
  props?: Maybe<Scalars['String']['output']>
  slate?: Maybe<Slate>
  type: AppInteractionType
}

export enum AppInteractionType {
  Close = 'Close',
  Data = 'Data',
  OpenModal = 'OpenModal',
  OpenToast = 'OpenToast',
  Redirect = 'Redirect',
  Reload = 'Reload',
  Show = 'Show',
}

export type AppPublication = {
  addedById?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  itemId: Scalars['String']['output']
  networkId: Scalars['String']['output']
}

export type AppSetting = {
  appId: Scalars['String']['output']
  context: PermissionContext
  entityId?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  networkId: Scalars['String']['output']
  settings: Scalars['String']['output']
}

export type AppToken = {
  accessToken: Scalars['String']['output']
  gatewayUrl?: Maybe<Scalars['String']['output']>
}

export enum AskAiAvailability {
  disabled = 'disabled',
  everyone = 'everyone',
  staffOnly = 'staffOnly',
}

export type AssignOrRevokeBadgeInput = {
  memberId: Scalars['String']['input']
}

export type AttachmentPreview = {
  /** Extension of the attachment */
  extension: Scalars['String']['output']
  /** ID of the attachment */
  id: Scalars['ID']['output']
  /** Name of the attachment */
  name?: Maybe<Scalars['String']['output']>
  /** Size of the attachment */
  size?: Maybe<Scalars['String']['output']>
}

export type AuthInfoWithOtp = {
  member: Member
  network: Network
  otp: Scalars['String']['output']
  role?: Maybe<Role>
}

export type AuthToken = {
  accessToken: Scalars['String']['output']
  member: Member
  network?: Maybe<Network>
  networkPublicInfo: NetworkPublicInfo
  refreshToken: Scalars['String']['output']
  role: Role
}

export type AuthTokenWithOtp = {
  accessToken: Scalars['String']['output']
  member: Member
  network?: Maybe<Network>
  networkPublicInfo: NetworkPublicInfo
  otp: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
  role: Role
}

export type AvailableSearchSources = {
  /** Whether members are enabled for search. */
  members: Scalars['Boolean']['output']
  /** Whether spaces are enabled for search. */
  spaces: Scalars['Boolean']['output']
}

export type Badge = {
  active: Scalars['Boolean']['output']
  backgroundColor?: Maybe<Scalars['String']['output']>
  daysUntilExpired?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Media>
  imageId?: Maybe<Scalars['ID']['output']>
  longDescription?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  networkId: Scalars['ID']['output']
  settings?: Maybe<Array<BadgeSettings>>
  shortDescription: Scalars['String']['output']
  text?: Maybe<Scalars['String']['output']>
  textColor?: Maybe<Scalars['String']['output']>
  type: BadgeType
}

export type BadgeSettings = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type BadgeSettingsInput = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export enum BadgeType {
  Manual = 'Manual',
  NewMember = 'NewMember',
  Role = 'Role',
  SuspendedMember = 'SuspendedMember',
}

export type BaseCustomFieldSchema = {
  archived?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  externalKeys?: Maybe<Array<Scalars['String']['output']>>
  items?: Maybe<BaseCustomFieldSchema>
  key: Scalars['String']['output']
  name: Scalars['String']['output']
  properties?: Maybe<Array<BaseCustomFieldSchema>>
  required?: Maybe<Scalars['Boolean']['output']>
  type: CustomFieldType
  typeOptions?: Maybe<CustomFieldTypeOptions>
  validators?: Maybe<Array<CustomFieldValidator>>
}

export type BaseCustomFieldSchemaInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  externalKeys?: InputMaybe<Array<Scalars['String']['input']>>
  items?: InputMaybe<BaseCustomFieldSchemaInput>
  key: Scalars['String']['input']
  name: Scalars['String']['input']
  properties?: InputMaybe<Array<BaseCustomFieldSchemaInput>>
  required?: InputMaybe<Scalars['Boolean']['input']>
  type: CustomFieldType
  typeOptions?: InputMaybe<CustomFieldTypeOptionsInput>
  validators?: InputMaybe<Array<CustomFieldValidatorInput>>
}

export type BiDirectionalPageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

export type BillingPortalSession = {
  url: Scalars['String']['output']
}

export type BillingPrice = {
  amount: Scalars['Float']['output']
  default: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  interval: BillingPriceInterval
}

export enum BillingPriceInterval {
  Month = 'Month',
  Year = 'Year',
}

export type BillingProduct = {
  app?: Maybe<App>
  appId?: Maybe<Scalars['String']['output']>
  categories: Array<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  downgradable: Scalars['Boolean']['output']
  features: Array<Scalars['String']['output']>
  hubContent?: Maybe<HubContent>
  hubContentId?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  imageUrls: Array<Scalars['String']['output']>
  isEnterprise: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  order?: Maybe<Scalars['Float']['output']>
  popular: Scalars['Boolean']['output']
  prices: Array<BillingPrice>
  public: Scalars['Boolean']['output']
  purchasable: Scalars['Boolean']['output']
  purchaseLimit?: Maybe<Scalars['Float']['output']>
  requiredPlanOrder?: Maybe<Scalars['Float']['output']>
}

export type BillingProducts = {
  addons: Array<BillingProduct>
  plans: Array<BillingProduct>
}

export type Block = {
  children?: Maybe<Scalars['String']['output']>
  extraProps?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  output?: Maybe<Scalars['String']['output']>
  props?: Maybe<Scalars['String']['output']>
}

export type BlockInput = {
  children?: InputMaybe<Scalars['String']['input']>
  extraProps?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  output?: InputMaybe<Scalars['String']['input']>
  props?: InputMaybe<Scalars['String']['input']>
}

export type By = Member

export enum CallbackAction {
  Insert = 'Insert',
  Modal = 'Modal',
  None = 'None',
  Replace = 'Replace',
}

export type CallbackResponse = {
  action: CallbackAction
  slate?: Maybe<Slate>
  toast?: Maybe<Toast>
}

export type CaptchaSettings = {
  enabled: Scalars['Boolean']['output']
  secretKey?: Maybe<Scalars['String']['output']>
  siteKey?: Maybe<Scalars['String']['output']>
}

export type CaptchaSettingsInput = {
  enabled: Scalars['Boolean']['input']
  secretKey?: InputMaybe<Scalars['String']['input']>
  siteKey?: InputMaybe<Scalars['String']['input']>
}

export type ChartData = {
  label: Scalars['String']['output']
  points: Scalars['String']['output']
  value?: Maybe<Scalars['String']['output']>
}

export type Chat = {
  /** The ID of the chat */
  _id: Scalars['ID']['output']
  /** The ID of the avatar image */
  avatarId?: Maybe<Scalars['String']['output']>
  /** The URL of the avatar image */
  avatarUrl?: Maybe<Scalars['String']['output']>
  /** The date the chat was created */
  createdAt: Scalars['DateTime']['output']
  /** The ID of the user who created the chat */
  createdById: Scalars['String']['output']
  /** The participation record of the authenticated user */
  currentParticipant?: Maybe<ChatParticipant>
  /** The hash ID of the chat, used to determine if there is an existing chat */
  hashId?: Maybe<Scalars['String']['output']>
  /** The last message sent to the chat */
  lastMessage?: Maybe<MessagePreview>
  /** The name of the chat */
  name?: Maybe<Scalars['String']['output']>
  /** The network to which the chat belongs */
  networkId: Scalars['String']['output']
  /** The participation record of the other user in a direct chat. Null for group chats. */
  otherParticipant?: Maybe<ChatParticipant>
  /** The number of participants in the chat */
  participantCount: Scalars['Int']['output']
  /** The status of the chat: active or archived */
  status: ChatStatus
  /** The type of the chat: direct or group */
  type: ChatType
  /** The date the chat was updated */
  updatedAt: Scalars['DateTime']['output']
}

export type ChatIdFromSlug = {
  /** The ID of the chat */
  chatId?: Maybe<Scalars['String']['output']>
  /** The slug of the legacy private messaging space */
  slug: Scalars['String']['output']
}

export type ChatList = {
  data: Array<Chat>
  pageInfo: BiDirectionalPageInfo
}

export enum ChatLogType {
  AddedParticipants = 'AddedParticipants',
  CreatedGroup = 'CreatedGroup',
  DemotedAdmins = 'DemotedAdmins',
  EditedGroup = 'EditedGroup',
  LeftGroup = 'LeftGroup',
  PromotedAdmins = 'PromotedAdmins',
  RemovedParticipants = 'RemovedParticipants',
  TransferredOwnership = 'TransferredOwnership',
}

export type ChatParticipant = {
  _id: Scalars['ID']['output']
  archivedAt?: Maybe<Scalars['String']['output']>
  avatarUrl?: Maybe<Scalars['String']['output']>
  chatId: Scalars['ID']['output']
  deletedAt?: Maybe<Scalars['String']['output']>
  handle: Scalars['String']['output']
  lastReadMessage?: Maybe<MessageAddress>
  leftAt?: Maybe<Scalars['String']['output']>
  memberId: Scalars['ID']['output']
  name: Scalars['String']['output']
  role: ChatParticipantRole
  status: ChatParticipantStatus
}

export type ChatParticipantList = {
  data: Array<ChatParticipant>
  pageInfo: PageInfo
}

export enum ChatParticipantRole {
  Admin = 'Admin',
  Member = 'Member',
  Owner = 'Owner',
}

export enum ChatParticipantStatus {
  Active = 'Active',
  Left = 'Left',
  Removed = 'Removed',
}

export enum ChatStatus {
  Active = 'Active',
  Tombstone = 'Tombstone',
}

export enum ChatType {
  Direct = 'Direct',
  Group = 'Group',
}

export type ClientApiUsage = {
  clientId: Scalars['String']['output']
  clientName?: Maybe<Scalars['String']['output']>
  value: Scalars['Float']['output']
}

export type Collection = {
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<Member>
  customOrderingIndex: Scalars['Float']['output']
  description?: Maybe<Scalars['String']['output']>
  externalId?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  network?: Maybe<Network>
  relativeUrl?: Maybe<Scalars['String']['output']>
  slug: Scalars['String']['output']
  spaces?: Maybe<PaginatedSpace>
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type CollectionSpacesArgs = {
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
  memberId?: InputMaybe<Scalars['ID']['input']>
}

export type CollectionEdge = {
  cursor: Scalars['String']['output']
  node: Collection
}

export enum CollectionListOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  CUSTOM_ORDERING_INDEX = 'CUSTOM_ORDERING_INDEX',
  UPDATED_AT = 'UPDATED_AT',
}

export type ColumnSortInput = {
  key: Scalars['String']['input']
  order?: InputMaybe<SortOrder>
}

export type CompleteMultiPartUploadInput = {
  /** The ID of the media that is being uploaded. */
  mediaId: Scalars['String']['input']
}

export type CompletedMultiPartUpload = {
  error?: Maybe<Scalars['String']['output']>
  media?: Maybe<Media>
  mediaId: Scalars['String']['output']
}

export type ConfirmResetPasswordInput = {
  token: Scalars['String']['input']
}

export enum ContactabilityStatus {
  BlockedByYou = 'BlockedByYou',
  BlockedYou = 'BlockedYou',
  Contactable = 'Contactable',
  LimitedByContactPrivacy = 'LimitedByContactPrivacy',
  LimitedBySitePrivacy = 'LimitedBySitePrivacy',
  Unknown = 'Unknown',
}

export type ContentTranslationSettings = {
  enabled: Scalars['Boolean']['output']
}

export type ContentTranslationSettingsInput = {
  enabled: Scalars['Boolean']['input']
}

export type ContentTypeTemplate = {
  allowedReactions?: Maybe<Array<Scalars['String']['output']>>
  context: PostTypeContext
  forbiddenReactions?: Maybe<Array<Scalars['String']['output']>>
  languageTemplate?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  pluralName: Scalars['String']['output']
  postFields?: Maybe<CustomFieldsSchema>
  /** @deprecated Use allowedReactions instead. */
  primaryReactionType?: Maybe<ReactionType>
  selfRepliable?: Maybe<Scalars['Boolean']['output']>
  shortContentTemplate?: Maybe<Scalars['String']['output']>
  singleChoiceReactions?: Maybe<Array<Scalars['String']['output']>>
  slate?: Maybe<Slate>
  slug: Scalars['String']['output']
  titleTemplate?: Maybe<Scalars['String']['output']>
  validReplyTypesIds?: Maybe<Array<Scalars['String']['output']>>
}

export type ContextPermissions = {
  context: PermissionContext
  entityActions: Array<EntityPermissions>
}

export type ContextScopes = {
  context: PermissionContext
  entityScopes: Array<EntityScopes>
}

export type ConvertPostInput = {
  byPassFieldPermissions?: InputMaybe<Scalars['Boolean']['input']>
  fallbackField?: InputMaybe<Scalars['String']['input']>
  targetPostTypeId: Scalars['ID']['input']
}

export type CreateAccessGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>
  entityId: Scalars['ID']['input']
  entityType: AccessGroupEntityType
  info?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  type: Scalars['String']['input']
}

export type CreateAppInput = {
  about?: InputMaybe<Scalars['String']['input']>
  authorName?: InputMaybe<Scalars['String']['input']>
  authorUrl?: InputMaybe<Scalars['String']['input']>
  bannerId?: InputMaybe<Scalars['String']['input']>
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  faviconId?: InputMaybe<Scalars['String']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  networkId: Scalars['String']['input']
  onFreePlan?: InputMaybe<Scalars['Boolean']['input']>
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>
}

export type CreateBadgeInput = {
  active: Scalars['Boolean']['input']
  backgroundColor?: InputMaybe<Scalars['String']['input']>
  daysUntilExpired?: InputMaybe<Scalars['Float']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  longDescription?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  settings?: InputMaybe<Array<BadgeSettingsInput>>
  shortDescription: Scalars['String']['input']
  text?: InputMaybe<Scalars['String']['input']>
  textColor?: InputMaybe<Scalars['String']['input']>
}

export type CreateCollectionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  externalId?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CreateDraftPostInput = {
  /** The id of all the attachments to this post. */
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** The custom seo detail of this post */
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  /** Whether the post is locked */
  locked?: InputMaybe<Scalars['Boolean']['input']>
  /** The fields of the post. Depending of the post type it may include title, text, image, etc. */
  mappingFields: Array<PostMappingFieldInput>
  ownerId?: InputMaybe<Scalars['ID']['input']>
  /** The id of all the polls associated with this post. */
  pollIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** The id of this post's type */
  postTypeId: Scalars['String']['input']
  /**
   * This will publish the post immediately. If false, the post will become a draft.
   *       This is only usable by admins and moderators.
   */
  publish?: Scalars['Boolean']['input']
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** Providing this field will schedule the post to be published at the given date. */
  scheduledFor?: InputMaybe<Scalars['DateTime']['input']>
  /** The slug of the post creating the human readable part of its URL */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The TagIds for this post. Can be used in conjunction with tagNames. */
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** The tags of this post. Can be used in conjunction with tagIds. */
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CreateEmojiInput = {
  text: Scalars['String']['input']
}

export type CreateFileInput = {
  /** The MIME type of the file */
  contentType: Scalars['String']['input']
  /** The extension of the file */
  extension: Scalars['String']['input']
  /** The name of the file */
  name?: InputMaybe<Scalars['String']['input']>
  /** The size of the file in bytes */
  size: Scalars['Float']['input']
}

export type CreateGroupChatInput = {
  /** ID of the group avatar image */
  avatarId?: InputMaybe<Scalars['String']['input']>
  /** List up to 10 members as initial group participants. Use addMembersToGroup mutation after creating the group to add more members. */
  memberIds: Array<Scalars['String']['input']>
  /** Name of the group */
  name: Scalars['String']['input']
}

export type CreateHighlightedTag = {
  /** ID of an existing tag. This field will become required in an upcoming release. */
  tagId: Scalars['String']['input']
}

export type CreateImageInput = {
  /** The MIME type of the image */
  contentType: Scalars['String']['input']
  /** The height of the crop */
  cropHeight?: InputMaybe<Scalars['Int']['input']>
  /** The width of the crop */
  cropWidth?: InputMaybe<Scalars['Int']['input']>
  /** The x coordinate of the crop */
  cropX?: InputMaybe<Scalars['Int']['input']>
  /** The y coordinate of the crop */
  cropY?: InputMaybe<Scalars['Int']['input']>
  /** The zoom of the crop */
  cropZoom?: InputMaybe<Scalars['Int']['input']>
  /** The height of the image */
  height?: InputMaybe<Scalars['Int']['input']>
  /** The name of the image */
  name?: InputMaybe<Scalars['String']['input']>
  /** The size of the image in bytes */
  size: Scalars['Float']['input']
  /** The width of the image */
  width?: InputMaybe<Scalars['Int']['input']>
}

export type CreateLimitedSupportTokenInput = {
  networkId: Scalars['String']['input']
}

export type CreatePermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  scopes: Array<Scalars['String']['input']>
}

export type CreatePollInput = {
  /** The time when the poll closes for voting. Set to null to remove close date. */
  closesAt?: InputMaybe<Scalars['DateTime']['input']>
  /** The number of votes each participant can cast. Default is 1. */
  maxSelections?: InputMaybe<Scalars['Int']['input']>
  /** The time when the poll opens for voting. */
  opensAt?: InputMaybe<Scalars['DateTime']['input']>
  options: Array<PollOptionInput>
  /** The parent entity ID for the poll. Can only be null if the parent entity type is Post to create a draft poll. Draft polls will be lazily attached to the corresponding entity when the poll is first loaded as a property of the parent post. */
  parentEntityId?: InputMaybe<Scalars['String']['input']>
  /** The parent entity type for the poll */
  parentEntityType: PollEntityType
  /** Required if parentEntityId is not provided. */
  parentHint?: InputMaybe<PollParentHintInput>
  title: Scalars['String']['input']
}

/** Input for creating a post */
export type CreatePostInput = {
  /** The id of all the attachments to this post. */
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** The custom seo detail of this post */
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  /** Whether the post is locked */
  locked?: InputMaybe<Scalars['Boolean']['input']>
  /** The fields of the post. Depending of the post type it may include title, text, image, etc. */
  mappingFields: Array<PostMappingFieldInput>
  ownerId?: InputMaybe<Scalars['ID']['input']>
  /** The id of all the polls associated with this post. */
  pollIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** The id of this post's type */
  postTypeId: Scalars['String']['input']
  /**
   * This will publish the post immediately. If false, the post will become a draft.
   *       This is only usable by admins and moderators.
   */
  publish?: Scalars['Boolean']['input']
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** The slug of the post creating the human readable part of its URL */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The TagIds for this post. Can be used in conjunction with tagNames. */
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** The tags of this post. Can be used in conjunction with tagIds. */
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CreatePostTypeInput = {
  allowedReactions?: InputMaybe<Array<Scalars['String']['input']>>
  context: PostTypeContext
  customReactions?: InputMaybe<Array<CustomReactionInput>>
  description?: InputMaybe<Scalars['String']['input']>
  excludedNativeShortcuts?: InputMaybe<Array<Scalars['String']['input']>>
  forbiddenReactions?: InputMaybe<Array<Scalars['String']['input']>>
  iconId?: InputMaybe<Scalars['ID']['input']>
  languageTemplate?: InputMaybe<Scalars['String']['input']>
  layout?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  nativeFieldsTemplates?: InputMaybe<NativeFieldsTemplatesInput>
  pluralName: Scalars['String']['input']
  postFields?: InputMaybe<CustomFieldsSchemaInput>
  primaryReactionType?: InputMaybe<ReactionType>
  recommendationsSettings?: InputMaybe<PostTypeRecommendationSettingsInput>
  selfRepliable?: InputMaybe<Scalars['Boolean']['input']>
  shortContentTemplate?: InputMaybe<Scalars['String']['input']>
  singleChoiceReactions?: InputMaybe<Array<Scalars['String']['input']>>
  slate?: InputMaybe<SlateInput>
  titleTemplate?: InputMaybe<Scalars['String']['input']>
  validReplyTypesIds?: InputMaybe<Array<Scalars['String']['input']>>
}

export type CreateReportInput = {
  description?: InputMaybe<Scalars['String']['input']>
  entityId: Scalars['String']['input']
  entityType: ModerationEntityType
  reportCategory: ReportCategory
  spaceId?: InputMaybe<Scalars['String']['input']>
}

/** Input for creating a space. */
export type CreateSpaceInput = {
  address?: InputMaybe<SpaceAddressInput>
  adminIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** The id of the space banner. */
  bannerId?: InputMaybe<Scalars['String']['input']>
  /** The id of the collection in which the space is created. */
  collectionId?: InputMaybe<Scalars['ID']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>
  /** The description of the space. */
  description?: InputMaybe<Scalars['String']['input']>
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  /** Is this space hidden? */
  hidden?: InputMaybe<Scalars['Boolean']['input']>
  /** The id of the space image. */
  imageId?: InputMaybe<Scalars['String']['input']>
  /** Is this space invite only? */
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>
  layout?: InputMaybe<Scalars['String']['input']>
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** The name of the space. */
  name: Scalars['String']['input']
  nonAdminsCanInvite?: InputMaybe<Scalars['Boolean']['input']>
  /** Is this space a private space? */
  private?: InputMaybe<Scalars['Boolean']['input']>
  seoDetail?: InputMaybe<SpaceSeoDetailInput>
  slate?: InputMaybe<SlateInput>
  /** The slug of the space. It will be auto-generated if not provided. */
  slug?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<SpaceType>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  whoCanPost?: InputMaybe<Array<SpaceRoleType>>
  whoCanReact?: InputMaybe<Array<SpaceRoleType>>
  whoCanReply?: InputMaybe<Array<SpaceRoleType>>
  withRoles?: InputMaybe<Scalars['Boolean']['input']>
}

/** Input for creating a tag. */
export type CreateTagInput = {
  /** The description of the tag. */
  description?: InputMaybe<Scalars['String']['input']>
  /** The slug of the tag. Slug is auto-generated from title if left empty. */
  slug?: InputMaybe<Scalars['String']['input']>
  /** The name of the tag. */
  title: Scalars['String']['input']
}

export type CreateTemplateInput = {
  about?: InputMaybe<Scalars['String']['input']>
  appIds?: InputMaybe<Array<Scalars['String']['input']>>
  authorName?: InputMaybe<Scalars['String']['input']>
  authorUrl?: InputMaybe<Scalars['String']['input']>
  bannerId?: InputMaybe<Scalars['String']['input']>
  categories?: InputMaybe<Array<Scalars['String']['input']>>
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  entityId: Scalars['String']['input']
  entityType: TemplateEntityType
  faviconId?: InputMaybe<Scalars['String']['input']>
  hubContentId?: InputMaybe<Scalars['String']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  onFreePlan?: InputMaybe<Scalars['Boolean']['input']>
  previewHtml?: InputMaybe<Scalars['String']['input']>
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>
  upsertKey?: InputMaybe<Scalars['String']['input']>
}

export type CreatedGroupMetadata = {
  type: ChatLogType
}

export enum CreatorType {
  App = 'App',
  Member = 'Member',
  System = 'System',
}

export type CustomCode = {
  anonymize: Scalars['Boolean']['output']
  code: Scalars['String']['output']
  /** Indicates whether the custom code enables integration with cookie consent management platforms (CMPs). */
  isCmpProvider?: Maybe<Scalars['Boolean']['output']>
  position: CustomCodePosition
}

export enum CustomCodePosition {
  BODY = 'BODY',
  HEAD = 'HEAD',
}

export type CustomField = {
  key: Scalars['String']['output']
  relationEntities?: Maybe<CustomFieldRelation>
  value?: Maybe<Scalars['String']['output']>
}

export type CustomFieldInput = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type CustomFieldPrivacy = {
  allow: Array<CustomFieldPrivacyOptions>
}

export type CustomFieldPrivacyInput = {
  allow: Array<CustomFieldPrivacyOptions>
}

export enum CustomFieldPrivacyOptions {
  ADMIN = 'ADMIN',
  OWN = 'OWN',
}

export type CustomFieldRelation = {
  medias: Array<Media>
  members: Array<Member>
  posts: Array<Post>
  spaces: Array<Space>
  tags: Array<Tag>
}

export type CustomFieldSchema = {
  archived?: Maybe<Scalars['Boolean']['output']>
  default?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  externalKeys?: Maybe<Array<Scalars['String']['output']>>
  items?: Maybe<BaseCustomFieldSchema>
  key: Scalars['String']['output']
  name: Scalars['String']['output']
  properties?: Maybe<Array<BaseCustomFieldSchema>>
  readPrivacy?: Maybe<CustomFieldPrivacy>
  required?: Maybe<Scalars['Boolean']['output']>
  searchable?: Maybe<Scalars['Boolean']['output']>
  settings?: Maybe<Array<CustomFieldSettings>>
  type: CustomFieldType
  typeOptions?: Maybe<CustomFieldTypeOptions>
  validators?: Maybe<Array<CustomFieldValidator>>
  writePrivacy?: Maybe<CustomFieldPrivacy>
}

export type CustomFieldSchemaInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>
  default?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  externalKeys?: InputMaybe<Array<Scalars['String']['input']>>
  items?: InputMaybe<BaseCustomFieldSchemaInput>
  key: Scalars['String']['input']
  name: Scalars['String']['input']
  properties?: InputMaybe<Array<BaseCustomFieldSchemaInput>>
  readPrivacy?: InputMaybe<CustomFieldPrivacyInput>
  required?: InputMaybe<Scalars['Boolean']['input']>
  searchable?: InputMaybe<Scalars['Boolean']['input']>
  settings?: InputMaybe<Array<CustomFieldSettingsInput>>
  type: CustomFieldType
  typeOptions?: InputMaybe<CustomFieldTypeOptionsInput>
  validators?: InputMaybe<Array<CustomFieldValidatorInput>>
  writePrivacy?: InputMaybe<CustomFieldPrivacyInput>
}

export type CustomFieldSettings = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type CustomFieldSettingsInput = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export enum CustomFieldType {
  array = 'array',
  boolean = 'boolean',
  date = 'date',
  number = 'number',
  object = 'object',
  relation = 'relation',
  richText = 'richText',
  text = 'text',
}

export type CustomFieldTypeOptions = {
  dateType?: Maybe<DateTypeOptions>
  numberType?: Maybe<NumberTypeOptions>
  relationType?: Maybe<RelationTypeOptions>
  richTextType?: Maybe<RichTextTypeOptions>
  textType?: Maybe<TextTypeOptions>
}

export type CustomFieldTypeOptionsInput = {
  dateType?: InputMaybe<DateTypeOptions>
  numberType?: InputMaybe<NumberTypeOptions>
  relationType?: InputMaybe<RelationTypeOptions>
  richTextType?: InputMaybe<RichTextTypeOptions>
  textType?: InputMaybe<TextTypeOptions>
}

export type CustomFieldValidator = {
  customErrorMessage?: Maybe<Scalars['String']['output']>
  validation: CustomFieldValidators
  value: Scalars['String']['output']
}

export type CustomFieldValidatorInput = {
  customErrorMessage?: InputMaybe<Scalars['String']['input']>
  validation: CustomFieldValidators
  value: Scalars['String']['input']
}

export enum CustomFieldValidators {
  allOf = 'allOf',
  anyOf = 'anyOf',
  enum = 'enum',
  exclusiveMaximum = 'exclusiveMaximum',
  exclusiveMinimum = 'exclusiveMinimum',
  format = 'format',
  maxItems = 'maxItems',
  maxLength = 'maxLength',
  maxProperties = 'maxProperties',
  maximum = 'maximum',
  minItems = 'minItems',
  minLength = 'minLength',
  minProperties = 'minProperties',
  minimum = 'minimum',
  multipleOf = 'multipleOf',
  not = 'not',
  oneOf = 'oneOf',
  pattern = 'pattern',
  uniqueItems = 'uniqueItems',
}

export type CustomFieldsSchema = {
  fields: Array<CustomFieldSchema>
}

export type CustomFieldsSchemaInput = {
  fields: Array<CustomFieldSchemaInput>
}

export enum CustomHostnameStatus {
  Missing = 'Missing',
  Ok = 'Ok',
  Pending = 'Pending',
  Wrong = 'Wrong',
}

export type CustomReaction = {
  activeColor?: Maybe<Scalars['String']['output']>
  activeGlyphId?: Maybe<Scalars['String']['output']>
  activeName?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  glyphId: Scalars['String']['output']
  key: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type CustomReactionInput = {
  activeColor?: InputMaybe<Scalars['String']['input']>
  activeGlyphId?: InputMaybe<Scalars['String']['input']>
  activeName?: InputMaybe<Scalars['String']['input']>
  color?: InputMaybe<Scalars['String']['input']>
  glyphId: Scalars['String']['input']
  key: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type CustomSeoDetail = {
  canonicalUrl?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  noIndex?: Maybe<Scalars['Boolean']['output']>
  thumbnail?: Maybe<Media>
  thumbnailId?: Maybe<Scalars['ID']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type CustomSeoDetailInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  noIndex?: InputMaybe<Scalars['Boolean']['input']>
  thumbnailId?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export enum CustomSsoType {
  Saml = 'Saml',
  oauth2 = 'oauth2',
}

export type DailyApiUsage = {
  date: Scalars['DateTime']['output']
  total: Scalars['Float']['output']
  usageType: ApiRequestLimitType
  values: Array<ClientApiUsage>
}

export enum DateTypeOptions {
  date = 'date',
  datetime = 'datetime',
}

export enum DayOfWeek {
  FRIDAY = 'FRIDAY',
  MONDAY = 'MONDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
  THURSDAY = 'THURSDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
}

export enum DefaultSsoType {
  Apple = 'Apple',
  Discord = 'Discord',
  Slack = 'Slack',
  facebook = 'facebook',
  google = 'google',
  linkedin = 'linkedin',
}

export type DemoteChatAdminsInput = {
  /** List of member ids to demote from admin. These members must already be a part of the group chat. */
  memberIds: Array<Scalars['String']['input']>
}

export type DemotedAdminsMetadata = {
  demotedParticipants: Array<ChatParticipant>
  type: ChatLogType
}

export type DeprecatedBaseFilterInput = {
  and?: InputMaybe<Array<DeprecatedBaseFilterInput>>
  filtername: Filtername
  key?: InputMaybe<Scalars['String']['input']>
  negator?: InputMaybe<Scalars['String']['input']>
  operator?: InputMaybe<Scalars['String']['input']>
  or?: InputMaybe<Array<DeprecatedBaseFilterInput>>
  value?: InputMaybe<Scalars['String']['input']>
}

export type DeprecatedFiltersInput = {
  filter: DeprecatedBaseFilterInput
}

export enum DnsRecordStatus {
  Healthy = 'Healthy',
  Missing = 'Missing',
  Pending = 'Pending',
  Wrong = 'Wrong',
}

export enum DnsRecordType {
  CNAME = 'CNAME',
  TXT = 'TXT',
}

export type DomainAvailability = {
  available: Scalars['Boolean']['output']
}

export type DomainAvailabilityInput = {
  domain: Scalars['String']['input']
}

export type DomainDnsRecord = {
  desiredValue: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  status: DnsRecordStatus
  type: DnsRecordType
}

export type DomainParseResult = {
  isApex: Scalars['Boolean']['output']
  parts: DomainParts
}

export type DomainParts = {
  /** The apex part of the address. It includes the domain and TLD. The `my-domain.com` in `sub.my-domain.com`. */
  apex: Scalars['String']['output']
  /** The full domain name (a.k.a FQDN). It includes the subdomain, domain, and TLD. Is equivalent to `apex` if `subdomain` is missing. */
  domain: Scalars['String']['output']
  /** The Second-level domain of the address that appears before TLD. The `my-domain` in `sub.my-domain.com`. */
  sld: Scalars['String']['output']
  /** The subdomain part of the address. The `sub` in `sub.my-domain.com`. */
  subdomain?: Maybe<Scalars['String']['output']>
  /** The Top-level domain of the address, per ICANN specifications. (e.g. com, org, co.uk) */
  tld: Scalars['String']['output']
}

export type DomainProbeResult = {
  customHostnameStatus: CustomHostnameStatus
  dnsRecords: Array<DomainDnsRecord>
  parseResult?: Maybe<DomainParseResult>
  status: DomainProbeStatus
}

export enum DomainProbeStatus {
  Active = 'Active',
  Available = 'Available',
  Invalid = 'Invalid',
  Pending = 'Pending',
  ReadyForTransfer = 'ReadyForTransfer',
  Reserved = 'Reserved',
  RestrictedFeature = 'RestrictedFeature',
  Taken = 'Taken',
}

export type DomainTransferStatus = {
  aaaarecordSuccess: Scalars['Boolean']['output']
  aaaarecords: Array<Scalars['String']['output']>
  arecordSuccess: Scalars['Boolean']['output']
  arecords: Array<Scalars['String']['output']>
  cnameSuccess: Scalars['Boolean']['output']
  cnames: Array<Scalars['String']['output']>
  domain: Scalars['String']['output']
  ns: Array<Scalars['String']['output']>
  root: Scalars['Boolean']['output']
  success: Scalars['Boolean']['output']
  tribeARecords: Array<Scalars['String']['output']>
  tribeCname: Scalars['String']['output']
}

export type DynamicBlock = {
  app?: Maybe<App>
  appId: Scalars['String']['output']
  contexts?: Maybe<Array<PermissionContext>>
  description?: Maybe<Scalars['String']['output']>
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Media>
  imageId?: Maybe<Scalars['ID']['output']>
  key: Scalars['String']['output']
  maxSize: DynamicBlockSize
  name: Scalars['String']['output']
  slate?: Maybe<Slate>
  staffOnly: Scalars['Boolean']['output']
}

export type DynamicBlockSlateArgs = {
  context: PermissionContext
  entityId?: InputMaybe<Scalars['ID']['input']>
}

export type DynamicBlockEdge = {
  cursor: Scalars['String']['output']
  node: DynamicBlock
}

export enum DynamicBlockSize {
  full = 'full',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xl = 'xl',
}

export type EditMessageInput = {
  /** IDs of attached files. */
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>
  content: Scalars['String']['input']
  /** IDs of embedded links. */
  embedIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** IDs of attached images. */
  imageIds?: InputMaybe<Array<Scalars['String']['input']>>
  messageId: Scalars['String']['input']
  pageId: Scalars['String']['input']
}

export type EditedGroupMetadata = {
  avatarId?: Maybe<Scalars['String']['output']>
  avatarUrl?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  type: ChatLogType
}

export type EmailAvailability = {
  available: Scalars['Boolean']['output']
}

export enum EmailDigestFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
}

export type EmailDigestRecentPostsFilter = {
  filterOption: EmailDigestRecentPostsFilterOption
  spaceIds: Array<Scalars['String']['output']>
}

export type EmailDigestRecentPostsFilterInput = {
  filterOption: EmailDigestRecentPostsFilterOption
  spaceIds: Array<Scalars['String']['input']>
}

export enum EmailDigestRecentPostsFilterOption {
  ALL_SPACES_EXCEPT_SELECTED = 'ALL_SPACES_EXCEPT_SELECTED',
  JOINED_SPACES = 'JOINED_SPACES',
  ONLY_SELECTED_SPACES = 'ONLY_SELECTED_SPACES',
}

export type EmailLog = {
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  reason?: Maybe<Scalars['String']['output']>
  recipient: Scalars['String']['output']
  status: EmailStatus
  type: EmailType
  updatedAt: Scalars['DateTime']['output']
}

export type EmailLogEdge = {
  cursor: Scalars['String']['output']
  node: EmailLog
}

export enum EmailStatus {
  BLOCKED = 'BLOCKED',
  BOUNCED = 'BOUNCED',
  CREATED = 'CREATED',
  DEFERRED = 'DEFERRED',
  DELIVERED = 'DELIVERED',
  DROPPED = 'DROPPED',
  PROCESSED = 'PROCESSED',
  SENT = 'SENT',
}

export enum EmailType {
  AppNotification = 'AppNotification',
  CollaboratorInvitation = 'CollaboratorInvitation',
  EmailDigest = 'EmailDigest',
  EmailVerification = 'EmailVerification',
  ExportFinished = 'ExportFinished',
  MemberConfirmation = 'MemberConfirmation',
  MemberInvitation = 'MemberInvitation',
  Notification = 'Notification',
  ResetPassword = 'ResetPassword',
  Unknown = 'Unknown',
}

export type Embed = {
  author?: Maybe<Scalars['String']['output']>
  author_url?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  html?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  options?: Maybe<Scalars['String']['output']>
  provider_name?: Maybe<Scalars['String']['output']>
  thumbnail_height?: Maybe<Scalars['String']['output']>
  thumbnail_url?: Maybe<Scalars['String']['output']>
  thumbnail_width?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
}

export type EmbedInput = {
  options?: InputMaybe<Scalars['String']['input']>
  url: Scalars['String']['input']
}

export type EmbedPreview = {
  description?: Maybe<Scalars['String']['output']>
  iconUrl?: Maybe<Scalars['String']['output']>
  /** ID of the embed */
  id: Scalars['ID']['output']
  providerName?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  /** The embedded URL */
  url: Scalars['String']['output']
}

export type Emoji = {
  id: Scalars['ID']['output']
  text: Scalars['String']['output']
}

export type EntityListFilterByInput = {
  key: Scalars['String']['input']
  operator: EntityListFilterByOperator
  value: Scalars['String']['input']
}

export enum EntityListFilterByOperator {
  contains = 'contains',
  endsWith = 'endsWith',
  equals = 'equals',
  gt = 'gt',
  gte = 'gte',
  hasValue = 'hasValue',
  in = 'in',
  lt = 'lt',
  lte = 'lte',
  nin = 'nin',
  not = 'not',
  startsWith = 'startsWith',
}

export type EntityPermissions = {
  actions: Array<ActionPermissions>
  id: Scalars['String']['output']
}

export type EntityReport = {
  data?: Maybe<Array<ReportData>>
  description?: Maybe<Scalars['String']['output']>
  endDate?: Maybe<Scalars['DateTime']['output']>
  entity?: Maybe<ReportableEntity>
  entityId: Scalars['ID']['output']
  entityType: ReportableEntityType
  startDate?: Maybe<Scalars['DateTime']['output']>
  tooltip?: Maybe<Scalars['String']['output']>
}

export type EntityScopes = {
  id: Scalars['String']['output']
  scopes: Array<Scalars['String']['output']>
}

export type EventType = {
  description: Scalars['String']['output']
  name: Scalars['String']['output']
  noun: Scalars['String']['output']
  requiredScope: Scalars['String']['output']
  shortDescription: Scalars['String']['output']
  verb: EventVerb
}

export enum EventVerb {
  ACCEPTED = 'ACCEPTED',
  ADDED = 'ADDED',
  BANNED = 'BANNED',
  BLOCKED = 'BLOCKED',
  CANCELED = 'CANCELED',
  CLICKED = 'CLICKED',
  CREATED = 'CREATED',
  CUSTOM = 'CUSTOM',
  DELETED = 'DELETED',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  FOLLOWED = 'FOLLOWED',
  GENERATED = 'GENERATED',
  HIDDEN = 'HIDDEN',
  IMPRESSION = 'IMPRESSION',
  INSTALLED = 'INSTALLED',
  LOGGED_IN = 'LOGGED_IN',
  MARKED_FOR_PURGE = 'MARKED_FOR_PURGE',
  NOT_ASSIGNED = 'NOT_ASSIGNED',
  PERMITTED = 'PERMITTED',
  PING = 'PING',
  PINGED = 'PINGED',
  PINNED = 'PINNED',
  PUBLISHED = 'PUBLISHED',
  PURGED = 'PURGED',
  RECEIVED = 'RECEIVED',
  REJECTED = 'REJECTED',
  REMOVED = 'REMOVED',
  RESENT = 'RESENT',
  REVOKED = 'REVOKED',
  SENT = 'SENT',
  SIGNED_UP = 'SIGNED_UP',
  SUCCEEDED = 'SUCCEEDED',
  SUSPENDED = 'SUSPENDED',
  UNBLOCKED = 'UNBLOCKED',
  UNFOLLOWED = 'UNFOLLOWED',
  UNHIDDEN = 'UNHIDDEN',
  UNINSTALLED = 'UNINSTALLED',
  UNPINNED = 'UNPINNED',
  UNPUBLISHED = 'UNPUBLISHED',
  UNSUSPENDED = 'UNSUSPENDED',
  UNUSED = 'UNUSED',
  UNVERIFIED = 'UNVERIFIED',
  UPDATED = 'UPDATED',
  USED = 'USED',
  VERIFIED = 'VERIFIED',
  VIEWED = 'VIEWED',
}

export type Export = {
  createdAt: Scalars['DateTime']['output']
  endedAt?: Maybe<Scalars['DateTime']['output']>
  fields: Array<Scalars['String']['output']>
  file?: Maybe<File>
  fileId: Scalars['ID']['output']
  filterBy?: Maybe<Array<MemberListFilterBy>>
  id: Scalars['ID']['output']
  networkId: Scalars['ID']['output']
  startedAt?: Maybe<Scalars['DateTime']['output']>
  status: ExportStatus
  updatedAt: Scalars['DateTime']['output']
}

export type ExportEdge = {
  cursor: Scalars['String']['output']
  node: Export
}

export type ExportInput = {
  fields: Array<Scalars['String']['input']>
  filterBy?: InputMaybe<Array<MemberListFilterByInput>>
  query?: InputMaybe<Scalars['String']['input']>
}

export enum ExportListOrderByEnum {
  CreatedAt = 'CreatedAt',
  UpdatedAt = 'UpdatedAt',
}

export enum ExportStatus {
  Done = 'Done',
  Expired = 'Expired',
  Failed = 'Failed',
  InProgress = 'InProgress',
  Initialized = 'Initialized',
}

export type ExternalSearchResult = {
  description: Scalars['String']['output']
  iconUrl?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type ExtraProperty = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export enum ExtraPropertyEntityType {
  Member = 'Member',
  Network = 'Network',
}

export type File = {
  downloadUrl: Scalars['String']['output']
  extension: Scalars['String']['output']
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  size?: Maybe<Scalars['Int']['output']>
  status?: Maybe<MediaStatus>
  url: Scalars['String']['output']
}

export enum FilterOperator {
  And = 'And',
  Or = 'Or',
}

export enum Filtername {
  and = 'and',
  leaf = 'leaf',
  or = 'or',
}

/** FiltersInput class is used to group multiple group filters with a logical operator. It allows combining multiple group filters using AND, OR, or other logical operators. Each filters input represents a set of group filters combined with a logical operator. For example, a filters input with operator AND and group filters [{operator: OR, matchFilters: [{key: "status", is: "\"active\""}, {key: "status", is: "\"pending\""}]}, {operator: AND, matchFilters: [{key: "age", range: {gte: "18", lte: "30"}}]}] will match records where (status is "active" or "pending") and (age is between 18 and 30) inclusive. */
export type FiltersInput = {
  /** List of group filters to be combined. Each group filter represents a set of conditions (match filters) combined with a logical operator. */
  groupFilters: Array<GroupFiltersInput>
  /** Logical operator to combine group filters. This can be AND, OR, etc. */
  operator: FilterOperator
}

export enum FlaggedType {
  MEMBER = 'MEMBER',
  SYSTEM = 'SYSTEM',
}

export type Footer = {
  urls: Array<FooterUrl>
}

export type FooterUrl = {
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

/** GeoBoundingBoxInput class is used to filter fields of type geo-point. It allows specifying a bounding box with top-left and bottom-right geographical points. */
export type GeoBoundingBoxInput = {
  /** Bottom-right point of the bounding box */
  bottomRight: GeoPointInput
  /** Top-left point of the bounding box */
  topLeft: GeoPointInput
}

/** GeoPointInput class is used to represent a geographical point with latitude and longitude. It is useful for geo-based filtering. */
export type GeoPointInput = {
  /** Latitude of the geographical point */
  lat: Scalars['Float']['input']
  /** Longitude of the geographical point */
  lon: Scalars['Float']['input']
}

/** GeoRadiusInput class is used to filter fields of type geo-point. It allows specifying a radius with a center geographical point. */
export type GeoRadiusInput = {
  /** Center point of the radius */
  center: GeoPointInput
  /** Radius distance from the center point */
  radius: Scalars['Float']['input']
}

export type GlobalToken = {
  accessToken: Scalars['String']['output']
  email: Scalars['String']['output']
}

export type GlobalTokenInput = {
  email: Scalars['String']['input']
  verificationCode: Scalars['String']['input']
}

export type Glyph = {
  id: Scalars['ID']['output']
  text: Scalars['String']['output']
  variant: GlyphMediaVariant
}

export enum GlyphMediaVariant {
  emoji = 'emoji',
  icon = 'icon',
}

export enum GroupChatCreationPermission {
  Anyone = 'Anyone',
  Staff = 'Staff',
}

/** GroupFiltersInput class is used to group multiple match filters with a logical operator. It allows combining multiple match filters using AND, OR, or other logical operators. Each group filter represents a set of conditions (match filters) combined with a logical operator. For example, a group filter with operator AND and match filters [{key: "status", is: "\"active\""}, {key: "age", range: {gte: "18"}}] will match records where the status is "active" and the age is 18 or more. */
export type GroupFiltersInput = {
  /** List of match filters to be combined. Each match filter represents a single condition. */
  matchFilters: Array<MatchFilterInput>
  /** Logical operator to combine match filters. This can be AND, OR, etc. */
  operator: FilterOperator
}

export enum HomeSpaceType {
  Default = 'Default',
  NewUser = 'NewUser',
  ReturningUser = 'ReturningUser',
}

export type HubContent = {
  attachmentIds: Array<Scalars['ID']['output']>
  attachments?: Maybe<Array<File>>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  embedIds: Array<Scalars['ID']['output']>
  embeds?: Maybe<Array<Embed>>
  fields?: Maybe<Array<HubContentCustomField>>
  id: Scalars['ID']['output']
  imageIds: Array<Scalars['ID']['output']>
  images?: Maybe<Array<Media>>
  language?: Maybe<Scalars['String']['output']>
  /** Whether the post is locked */
  locked: Scalars['Boolean']['output']
  postTypeId: Scalars['ID']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  tagIds?: Maybe<Array<Scalars['String']['output']>>
  thumbnail?: Maybe<Media>
  thumbnailId?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type HubContentCustomField = {
  key: Scalars['String']['output']
  relationEntities?: Maybe<HubContentCustomFieldRelation>
  value?: Maybe<Scalars['String']['output']>
}

export type HubContentCustomFieldRelation = {
  medias: Array<Media>
}

export type Image = {
  cropHeight?: Maybe<Scalars['Int']['output']>
  cropWidth?: Maybe<Scalars['Int']['output']>
  cropX: Scalars['Int']['output']
  cropY: Scalars['Int']['output']
  cropZoom: Scalars['Float']['output']
  dominantColorHex?: Maybe<Scalars['String']['output']>
  downloadUrl: Scalars['String']['output']
  dpi?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  status?: Maybe<MediaStatus>
  url: Scalars['String']['output']
  urls?: Maybe<MediaUrls>
  width?: Maybe<Scalars['Float']['output']>
}

export type ImagePreview = {
  /** The dominant color of the image */
  dominantColorHex?: Maybe<Scalars['String']['output']>
  /** Thumbnail URL of the image */
  iconUrl: Scalars['String']['output']
  /** ID of the image */
  id: Scalars['ID']['output']
  /** Name of the image */
  name?: Maybe<Scalars['String']['output']>
}

export type ImpersonateLoginToNetworkInput = {
  memberId: Scalars['ID']['input']
  networkId: Scalars['ID']['input']
}

export type In = Space

export type InputPathPermissions = {
  isAuthorized: IsAuthorized
  path: Scalars['String']['output']
  values: Array<ValuePermissions>
}

export type InstallAppInput = {
  context?: InputMaybe<PermissionContext>
  entityId?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<PrimaryScopes>>
  templatesMappings?: InputMaybe<AppInstallationTemplatesMappingsInput>
}

export type IntValue = {
  int: Scalars['Int']['output']
}

export type InteractWithAppInput = {
  appId: Scalars['String']['input']
  callbackId?: InputMaybe<Scalars['String']['input']>
  dynamicBlockKey?: InputMaybe<Scalars['String']['input']>
  inputs?: InputMaybe<Scalars['String']['input']>
  interactionId: Scalars['String']['input']
  preview?: InputMaybe<Scalars['Boolean']['input']>
  props?: InputMaybe<Scalars['String']['input']>
  shortcutKey?: InputMaybe<Scalars['String']['input']>
}

/** Input for inviting members. */
export type InviteMembersInput = {
  /** The ids of the default spaces the invitees have. */
  defaultSpacesIds?: InputMaybe<Array<Scalars['ID']['input']>>
  /** When does the invitations expire? Empty for no expiration. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>
  /** Custom message for invitation. */
  invitationMessage?: InputMaybe<Scalars['String']['input']>
  /** The details of the invitees */
  invitees: Array<InviteeInput>
  /** The id of the role the invitees have. */
  roleId?: InputMaybe<Scalars['ID']['input']>
}

export type InviteeInput = {
  /** The ids of the default spaces this invitee has. */
  defaultSpacesIds?: InputMaybe<Array<Scalars['ID']['input']>>
  /** The email address of the invitee. */
  email: Scalars['String']['input']
  /** The name of the invitee. */
  name?: InputMaybe<Scalars['String']['input']>
  /** The role id of the invitee. */
  roleId?: InputMaybe<Scalars['ID']['input']>
}

export type IsAuthorized = {
  authorized: Scalars['Boolean']['output']
  onPaidPlan?: Maybe<Scalars['Boolean']['output']>
  reason?: Maybe<UnauthorizedReason>
}

export type JoinNetworkInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  phone?: InputMaybe<Scalars['String']['input']>
  tagline?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username?: InputMaybe<Scalars['String']['input']>
  verified?: InputMaybe<Scalars['Boolean']['input']>
}

export type JoinNetworkWithLinkInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  invitationLinkId: Scalars['String']['input']
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  username?: InputMaybe<Scalars['String']['input']>
}

export type JoinNetworkWithTokenInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  token: Scalars['String']['input']
  username?: InputMaybe<Scalars['String']['input']>
}

export type JwtSsoAuthUrls = {
  authorizationUrl?: Maybe<Scalars['String']['output']>
  signUpUrl?: Maybe<Scalars['String']['output']>
}

export type JwtSsoToken = {
  clientSecret: Scalars['String']['output']
}

export type KeyValue = {
  key: Scalars['String']['output']
  value?: Maybe<Scalars['String']['output']>
}

export type LeaderboardItem = {
  member?: Maybe<Member>
  memberId: Scalars['String']['output']
  score: Scalars['Float']['output']
}

export type LeftGroupMetadata = {
  type: ChatLogType
}

export type LoginNetworkWithPasswordInput = {
  password: Scalars['String']['input']
  usernameOrEmail: Scalars['String']['input']
}

export type LoginSupportWithSsoCodeInput = {
  code: Scalars['String']['input']
  hd: Scalars['String']['input']
  prompt: Scalars['String']['input']
  scope: Scalars['String']['input']
  state: Scalars['String']['input']
}

export type LoginWithSamlResponseInput = {
  relayState: Scalars['String']['input']
  samlResponse: Scalars['String']['input']
}

export type LoginWithSsoCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>
  hd?: InputMaybe<Scalars['String']['input']>
  oauth_token?: InputMaybe<Scalars['String']['input']>
  oauth_verifier?: InputMaybe<Scalars['String']['input']>
  prompt?: InputMaybe<Scalars['String']['input']>
  scope?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
}

export type LogoutNetworkInput = {
  sessionId: Scalars['String']['input']
}

export type MassActionFilters = {
  entityIds?: InputMaybe<Array<Scalars['ID']['input']>>
  filterBy?: InputMaybe<Array<MemberListFilterByInput>>
  query?: InputMaybe<Scalars['String']['input']>
}

export type MassActionFiltersModel = {
  entityIds?: Maybe<Array<Scalars['ID']['output']>>
  filterBy?: Maybe<Array<MemberListFilterBy>>
  query?: Maybe<Scalars['String']['output']>
}

export type MassActionRequest = {
  action: MassActionRequestAction
  context: MassActionRequestContext
  createdAt: Scalars['DateTime']['output']
  createdById: Scalars['String']['output']
  endedAt?: Maybe<Scalars['DateTime']['output']>
  entitiesCount?: Maybe<Scalars['Int']['output']>
  failedCount?: Maybe<Scalars['Int']['output']>
  filters: MassActionFiltersModel
  id: Scalars['ID']['output']
  networkId: Scalars['ID']['output']
  processedCount?: Maybe<Scalars['Int']['output']>
  startedAt?: Maybe<Scalars['DateTime']['output']>
  status: MassActionRequestStatus
  updatedAt: Scalars['DateTime']['output']
}

export enum MassActionRequestAction {
  Accept = 'Accept',
  AddTag = 'AddTag',
  AddToSpace = 'AddToSpace',
  AssignBadge = 'AssignBadge',
  Create = 'Create',
  Delete = 'Delete',
  Expire = 'Expire',
  Flag = 'Flag',
  Follow = 'Follow',
  Hide = 'Hide',
  Lock = 'Lock',
  Move = 'Move',
  Pin = 'Pin',
  Publish = 'Publish',
  Reject = 'Reject',
  RemoveTag = 'RemoveTag',
  Resend = 'Resend',
  Revoke = 'Revoke',
  RevokeBadge = 'RevokeBadge',
  Suspend = 'Suspend',
  Unflag = 'Unflag',
  Unfollow = 'Unfollow',
  Unhide = 'Unhide',
  Unpin = 'Unpin',
  Update = 'Update',
  Verify = 'Verify',
}

export enum MassActionRequestContext {
  Member = 'Member',
  MemberInvitation = 'MemberInvitation',
  ModerationItem = 'ModerationItem',
  Post = 'Post',
  Space = 'Space',
  Tag = 'Tag',
}

export type MassActionRequestExtraPropertiesInput = {
  badgeIds?: InputMaybe<Array<Scalars['ID']['input']>>
  includeReplies?: InputMaybe<Scalars['Boolean']['input']>
  postTypeId?: InputMaybe<Scalars['ID']['input']>
  removeAllTags?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['ID']['input']>
  tagIds?: InputMaybe<Array<Scalars['ID']['input']>>
  tagNames?: InputMaybe<Array<Scalars['ID']['input']>>
  updatePostProperties?: InputMaybe<MassActionUpdatePostPropertiesInput>
}

export type MassActionRequestInput = {
  action: MassActionRequestAction
  context: MassActionRequestContext
  extraProperties?: InputMaybe<MassActionRequestExtraPropertiesInput>
  filters: MassActionFilters
  waitForConfirmation?: InputMaybe<Scalars['Boolean']['input']>
}

export enum MassActionRequestStatus {
  Done = 'Done',
  Failed = 'Failed',
  InProgress = 'InProgress',
  Initialized = 'Initialized',
  WaitingForConfirmation = 'WaitingForConfirmation',
}

export type MassActionUpdatePostPropertiesInput = {
  ownerId?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
}

/** MatchFilterInput class is used to filter fields of various types. It allows specifying different conditions such as equality, text containment, range, geo-bounding box, geo-radius, values count, null check, and emptiness check. Each match filter represents a single condition applied to a specific field. For example, instead of title is 'hello', you would use {key: "title", is: "\"hello\""} */
export type MatchFilterInput = {
  /** Filter to match any of the provided values (values should be JSON strings). For example, {key: "status", any: ["\"active\"", "\"pending\""]} will match records where the status field is either "active" or "pending". */
  any?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter to check if the text contains a specific string. For example, {key: "description", containsText: "example"} will match records where the description field contains the string "example". */
  containsText?: InputMaybe<Scalars['String']['input']>
  /** Filter to check if the text does not contain a specific string. For example, {key: "description", doesNotContainText: "example"} will match records where the description field does not contain the string "example". */
  doesNotContainText?: InputMaybe<Scalars['String']['input']>
  /** Filter to exclude all of the provided values (values should be JSON strings). For example, {key: "status", except: ["\"inactive\"", "\"banned\""]} will match records where the status field is neither "inactive" nor "banned". */
  except?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter to match a geographical bounding box. For example, {key: "location", geoBoundingBox: {topLeft: {lat: 40.73, lon: -74.1}, bottomRight: {lat: 40.01, lon: -71.12}}} will match records where the location field is within the specified bounding box. */
  geoBoundingBox?: InputMaybe<GeoBoundingBoxInput>
  /** Filter to match a geographical radius. For example, {key: "location", geoRadius: {center: {lat: 40.73, lon: -74.1}, radius: 10}} will match records where the location field is within a 10 km radius of the specified center point. */
  geoRadius?: InputMaybe<GeoRadiusInput>
  /** Filter to match the exact value (value should be a JSON string). For example, {key: "title", is: "\"hello\""} will match records where the title field is exactly "hello". */
  is?: InputMaybe<Scalars['String']['input']>
  /** Filter to check if the field value is empty (for strings or arrays). For example, {key: "comments", isEmpty: true} will match records where the comments field (an array) is empty. */
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>
  /** Filter to exclude the exact value (value should be a JSON string). For example, {key: "title", isNot: "\"hello\""} will match records where the title field is not "hello". */
  isNot?: InputMaybe<Scalars['String']['input']>
  /** Filter to check if the field value is null. For example, {key: "deletedAt", isNull: true} will match records where the deletedAt field is null. */
  isNull?: InputMaybe<Scalars['Boolean']['input']>
  /** Field key to apply the filter on. This specifies which field the condition will be applied to. */
  key: Scalars['String']['input']
  /** Filter to match a range of dates or numbers (each value should be a JSON string). For example, {key: "age", range: {gte: "18", lte: "30"}} will match records where the age field is between 18 and 30 inclusive. For dates, {key: "createdAt", range: {gte: "2022-01-01", lte: "2022-12-31"}} will match records where the createdAt field is between January 1, 2022, and December 31, 2022 inclusive. */
  range?: InputMaybe<RangeInput>
  /** Filter to match the count of values in an array. For example, {key: "tags", valuesCount: {gte: 3}} will match records where the tags field (an array) has 3 or more values. */
  valuesCount?: InputMaybe<ValuesCountInput>
}

export type Media = Emoji | File | Glyph | Image

export type MediaBase = {
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  purgeRequestedAt?: Maybe<Scalars['DateTime']['output']>
  purgedAt?: Maybe<Scalars['DateTime']['output']>
  remoteUrl?: Maybe<Scalars['String']['output']>
  status: MediaStatus
  type: MediaType
  uploaded: Scalars['Boolean']['output']
}

export type MediaLimits = {
  /** @deprecated There is no limit on file size anymore */
  fileSizeLimit?: Maybe<Scalars['Float']['output']>
  /** @deprecated There is no limit on file types anymore */
  fileTypesLimit?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated There is no limit on image size anymore */
  imageSizeLimit?: Maybe<Scalars['Float']['output']>
  /** @deprecated There is no limit on image types anymore */
  imageTypesLimit?: Maybe<Array<Scalars['String']['output']>>
}

export type MediaNetworkSettings = {
  alternateUploadDestination?: Maybe<Scalars['String']['output']>
  fileSizeLimit: Scalars['Float']['output']
  fileTypesLimit: Array<Scalars['String']['output']>
  imageSizeLimit: Scalars['Float']['output']
  imageTypesLimit: Array<Scalars['String']['output']>
}

export enum MediaStatus {
  Ok = 'Ok',
  Pending = 'Pending',
  Removed = 'Removed',
}

export enum MediaType {
  Emoji = 'Emoji',
  File = 'File',
  Glyph = 'Glyph',
  Image = 'Image',
}

export type MediaUrls = {
  full: Scalars['String']['output']
  icon?: Maybe<Scalars['String']['output']>
  large: Scalars['String']['output']
  medium: Scalars['String']['output']
  small: Scalars['String']['output']
  thumb: Scalars['String']['output']
}

export type Member = {
  activeSession?: Maybe<MemberSession>
  /** @deprecated Has been replaced by locale field */
  attributes: MemberAttributes
  authMemberProps?: Maybe<MemberAuthMemberProps>
  badges?: Maybe<Array<MemberBadge>>
  banner?: Maybe<Media>
  bannerId?: Maybe<Scalars['ID']['output']>
  blockedMemberIds?: Maybe<Array<Scalars['String']['output']>>
  blockedMembers?: Maybe<Array<Member>>
  createdAt: Scalars['DateTime']['output']
  /** @deprecated Has been replaced with name */
  displayName?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  emailStatus?: Maybe<MemberEmailStatus>
  externalId?: Maybe<Scalars['ID']['output']>
  externalUrl?: Maybe<Scalars['String']['output']>
  extraProperties?: Maybe<Array<ExtraProperty>>
  fields?: Maybe<Array<CustomField>>
  flagged: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  lastSeen?: Maybe<Scalars['DateTime']['output']>
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>
  locale: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  network?: Maybe<Network>
  networkId: Scalars['ID']['output']
  newEmail?: Maybe<Scalars['String']['output']>
  /** @deprecated Use the teammate field instead */
  overrideTeammate?: Maybe<Scalars['Boolean']['output']>
  profilePicture?: Maybe<Media>
  profilePictureId?: Maybe<Scalars['ID']['output']>
  relativeUrl?: Maybe<Scalars['String']['output']>
  role?: Maybe<Role>
  roleId: Scalars['ID']['output']
  score?: Maybe<Scalars['Int']['output']>
  sessions?: Maybe<Array<MemberSession>>
  settings?: Maybe<MemberSettings>
  shortcuts?: Maybe<Array<Shortcut>>
  spaces?: Maybe<PaginatedSpace>
  staffReasons?: Maybe<Array<StaffReason>>
  status: MemberStatus
  subscribersCount?: Maybe<Scalars['Int']['output']>
  tagline?: Maybe<Scalars['String']['output']>
  teammate: Scalars['Boolean']['output']
  timeZone?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
  username: Scalars['String']['output']
  verifiedAt?: Maybe<Scalars['DateTime']['output']>
}

export type MemberExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>
}

export type MemberSpacesArgs = {
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
}

export type MemberAttributes = {
  locale: Scalars['String']['output']
}

export type MemberAuthMemberProps = {
  canSendPrivateMessages?: Maybe<Scalars['Boolean']['output']>
  context: PermissionContext
  permissions?: Maybe<Array<ActionPermissions>>
  scopes?: Maybe<Array<Scalars['String']['output']>>
  subscribed?: Maybe<Scalars['Boolean']['output']>
}

export type MemberBadge = {
  backgroundColor?: Maybe<Scalars['String']['output']>
  badge?: Maybe<Badge>
  badgeId: Scalars['ID']['output']
  image?: Maybe<Media>
  imageId?: Maybe<Scalars['ID']['output']>
  longDescription?: Maybe<Scalars['String']['output']>
  shortDescription: Scalars['String']['output']
  text?: Maybe<Scalars['String']['output']>
  textColor?: Maybe<Scalars['String']['output']>
  type: BadgeType
}

export type MemberContactabilityStatus = {
  memberId: Scalars['String']['output']
  status: ContactabilityStatus
}

export type MemberEdge = {
  cursor: Scalars['String']['output']
  node: Member
}

export enum MemberEmailStatus {
  notDelivered = 'notDelivered',
  sent = 'sent',
  spammed = 'spammed',
  verified = 'verified',
}

export type MemberForSpaceInvitation = {
  member: Member
  memberId: Scalars['ID']['output']
  spaceAffiliation: SpaceMemberAffiliation
}

export type MemberInvitation = {
  createdAt: Scalars['DateTime']['output']
  emailLog?: Maybe<EmailLog>
  emailLogs?: Maybe<Array<EmailLog>>
  expiresAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  invitationMessage?: Maybe<Scalars['String']['output']>
  invitee?: Maybe<Member>
  inviteeEmail: Scalars['String']['output']
  inviteeId?: Maybe<Scalars['ID']['output']>
  inviteeName?: Maybe<Scalars['String']['output']>
  inviter?: Maybe<Member>
  inviterId?: Maybe<Scalars['ID']['output']>
  joinedAt?: Maybe<Scalars['DateTime']['output']>
  network?: Maybe<Network>
  networkId: Scalars['ID']['output']
  role?: Maybe<Role>
  roleId: Scalars['ID']['output']
  status: MemberInvitationStatus
}

export type MemberInvitationEdge = {
  cursor: Scalars['String']['output']
  node: MemberInvitation
}

export type MemberInvitationFilterByInput = {
  key: Scalars['String']['input']
  operator: MemberInvitationFilterByOperator
  value: Scalars['String']['input']
}

export enum MemberInvitationFilterByOperator {
  contains = 'contains',
  equals = 'equals',
  gt = 'gt',
  gte = 'gte',
  lt = 'lt',
  lte = 'lte',
  not = 'not',
}

export type MemberInvitationLink = {
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  inviter?: Maybe<Member>
  link: Scalars['String']['output']
  network?: Maybe<Network>
}

export enum MemberInvitationStatus {
  Expired = 'Expired',
  Pending = 'Pending',
  Revoked = 'Revoked',
  accepted = 'accepted',
  delivered = 'delivered',
  notDelivered = 'notDelivered',
  notSent = 'notSent',
  rejected = 'rejected',
  sent = 'sent',
  spammed = 'spammed',
}

export type MemberListFilterBy = {
  key: Scalars['String']['output']
  operator: MemberListFilterByOperator
  value: Scalars['String']['output']
}

export type MemberListFilterByInput = {
  key: Scalars['String']['input']
  operator: MemberListFilterByOperator
  value: Scalars['String']['input']
}

export enum MemberListFilterByOperator {
  contains = 'contains',
  endsWith = 'endsWith',
  equals = 'equals',
  gt = 'gt',
  gte = 'gte',
  hasValue = 'hasValue',
  in = 'in',
  lt = 'lt',
  lte = 'lte',
  nin = 'nin',
  not = 'not',
  startsWith = 'startsWith',
}

export type MemberPermissionsSettingsInput = {
  canDeleteAccount: Scalars['Boolean']['input']
}

export type MemberPrivateMessagingSettings = {
  /** @deprecated Use whoCanContactMember instead */
  privateMessagingEnabled?: Maybe<Scalars['Boolean']['output']>
  quickEnter?: Maybe<Scalars['Boolean']['output']>
  whoCanContactMember?: Maybe<PrivateMessagingIncomingContact>
}

export type MemberPrivateMessagingSettingsInput = {
  privateMessagingEnabled?: InputMaybe<Scalars['Boolean']['input']>
  quickEnter?: InputMaybe<Scalars['Boolean']['input']>
  whoCanContactMember?: InputMaybe<PrivateMessagingIncomingContact>
}

export type MemberSession = {
  active: Scalars['Boolean']['output']
  country?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  deviceBrand?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  ip: Scalars['String']['output']
  lastActivityAt: Scalars['DateTime']['output']
  os?: Maybe<Scalars['String']['output']>
  osVersion?: Maybe<Scalars['String']['output']>
}

export type MemberSettings = {
  privateMessaging?: Maybe<MemberPrivateMessagingSettings>
}

export type MemberSettingsInput = {
  privateMessaging?: InputMaybe<MemberPrivateMessagingSettingsInput>
}

export enum MemberStatus {
  DELETED = 'DELETED',
  Suspended = 'Suspended',
  UNVERIFIED = 'UNVERIFIED',
  VERIFIED = 'VERIFIED',
}

export enum MemberStatusInput {
  Suspended = 'Suspended',
  UNVERIFIED = 'UNVERIFIED',
  VERIFIED = 'VERIFIED',
}

export type MembersContactabilityStatus = {
  data: Array<MemberContactabilityStatus>
}

export type MembersPermissionSettings = {
  canDeleteAccount: Scalars['Boolean']['output']
}

export type Message = {
  /** The ID of the message */
  _id: Scalars['String']['output']
  /** The address signature of the message */
  addressSignature: Scalars['String']['output']
  /** The IDs of any attachments on the message */
  attachmentIds: Array<Scalars['String']['output']>
  attachments?: Maybe<Array<File>>
  /** The member ID of the author in the site */
  authorId: Scalars['String']['output']
  /** Cached copy of the author’s name. The property is not updated if the author name gets changed after the message is sent. */
  authorName?: Maybe<Scalars['String']['output']>
  /** The participant ID of the author in the chat */
  authorParticipantId: Scalars['String']['output']
  /** The content of the message */
  content?: Maybe<Scalars['String']['output']>
  /** The content type of the message */
  contentType: MessageContentType
  /** The date the message was edited */
  editedAt?: Maybe<Scalars['DateTime']['output']>
  /** The IDs of any embeds on the message */
  embedIds: Array<Scalars['String']['output']>
  embeds?: Maybe<Array<Embed>>
  /** The IDs of any images on the message. This is specifically for in-line images */
  imageIds: Array<Scalars['String']['output']>
  images?: Maybe<Array<Image>>
  /** The legacy ID of the message */
  legacyId?: Maybe<Scalars['String']['output']>
  /** The IDs of any members mentioned in the message */
  mentionedMemberIds: Array<Scalars['String']['output']>
  /** The IDs of any participants mentioned in the message */
  mentionedParticipantIds: Array<Scalars['String']['output']>
  /** Meta information of the message. May contain additional information regarding chat logs or contextual data of the message */
  meta?: Maybe<MessageMetadata>
  /** A nonce provided by the client. Can be used for optimistic updates */
  nonce?: Maybe<Scalars['String']['output']>
  /** The page ID of the message */
  pageId: Scalars['String']['output']
  /** A global index for the message indicating it's position in the chat */
  pos: Scalars['Int']['output']
  /** The preview of the message */
  preview?: Maybe<Scalars['String']['output']>
  /** The date the message was sent */
  sentAt: Scalars['DateTime']['output']
}

export type MessageAddress = {
  messageId: Scalars['String']['output']
  pageId: Scalars['String']['output']
  signature: Scalars['String']['output']
}

export enum MessageContentType {
  ChatLog = 'ChatLog',
  Html = 'Html',
  Plain = 'Plain',
}

export type MessageList = {
  data: Array<Message>
  pageInfo: PageInfo
}

export type MessageMetadata =
  | AddedParticipantsMetadata
  | CreatedGroupMetadata
  | DemotedAdminsMetadata
  | EditedGroupMetadata
  | LeftGroupMetadata
  | PromotedAdminsMetadata
  | RemovedParticipantsMetadata
  | TransferredOwnershipMetadata

export type MessagePreview = {
  /** The signature of address of the message. Required to fetch messages of a conversation. */
  addressSignature: Scalars['String']['output']
  /** The preview details of the first file attached to this message */
  attachmentPreview?: Maybe<AttachmentPreview>
  /** The number of files attached to the message */
  attachmentsCount: Scalars['Int']['output']
  /** The member ID of the author in the site */
  authorId: Scalars['String']['output']
  /** Cached copy of the author’s name. The property is not updated if the author name gets changed after the message is sent. */
  authorName?: Maybe<Scalars['String']['output']>
  /** The preview details of the first image attached to this message */
  embedPreview?: Maybe<EmbedPreview>
  /** The number of links embedded in the message */
  embedsCount: Scalars['Int']['output']
  /** The preview details of the first image attached to this message */
  imagePreview?: Maybe<ImagePreview>
  /** The number of images associated with the message */
  imagesCount: Scalars['Int']['output']
  /** The ID of the message */
  messageId: Scalars['String']['output']
  /** Meta information of the message. May contain additional information regarding chat logs or contextual data of the message */
  meta?: Maybe<MessageMetadata>
  /** The ID of the page this message belongs to */
  pageId: Scalars['String']['output']
  /** The preview of the message */
  preview?: Maybe<Scalars['String']['output']>
  /** The date the message was sent */
  sentAt: Scalars['DateTime']['output']
}

export type Migration = {
  id: Scalars['ID']['output']
  networkId: Scalars['ID']['output']
  requesterId: Scalars['ID']['output']
  stage: MigrationStage
  status: MigrationStatus
}

export type MigrationFieldError = {
  field: Scalars['String']['output']
  message: Scalars['String']['output']
}

export type MigrationFileResult = {
  file: Scalars['String']['output']
  insertedRows: Scalars['Int']['output']
  rowErrors: Array<MigrationRowErrors>
  skippedRows: Scalars['Int']['output']
}

export type MigrationRowErrors = {
  externalId?: Maybe<Scalars['String']['output']>
  fieldErrors: Array<MigrationFieldError>
  message: Scalars['String']['output']
  rowNumber: Scalars['Int']['output']
}

export enum MigrationStage {
  MEDIA = 'MEDIA',
  MEMBER = 'MEMBER',
  POST = 'POST',
  SPACE = 'SPACE',
  SPACE_MEMBER = 'SPACE_MEMBER',
  TAG = 'TAG',
}

export enum MigrationStatus {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
}

export enum ModerationEntityType {
  MEMBER = 'MEMBER',
  POST = 'POST',
}

export type ModerationItem = {
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  entity?: Maybe<ModerationItemEntity>
  flaggedBy: FlaggedType
  id: Scalars['String']['output']
  memberId?: Maybe<Scalars['String']['output']>
  moderator?: Maybe<Member>
  reporters?: Maybe<PaginatedModerationItemReporter>
  spaceId?: Maybe<Scalars['String']['output']>
  status: ModerationStatus
  updatedAt: Scalars['DateTime']['output']
}

export type ModerationItemReportersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type ModerationItemEdge = {
  cursor: Scalars['String']['output']
  node: ModerationItem
}

export type ModerationItemEntity = Member | Post

export type ModerationItemReporter = {
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  reportCategory: ReportCategory
  reporter?: Maybe<Member>
  updatedAt: Scalars['DateTime']['output']
}

export type ModerationItemReporterEdge = {
  cursor: Scalars['String']['output']
  node: ModerationItemReporter
}

export type ModerationMemberSettings = {
  minimumHoursToPost: Scalars['Int']['output']
  minimumHoursToReply: Scalars['Int']['output']
}

export type ModerationMemberSettingsInput = {
  minimumHoursToPost: Scalars['Int']['input']
  minimumHoursToReply: Scalars['Int']['input']
}

export enum ModerationOpMode {
  Purge = 'Purge',
  Retain = 'Retain',
}

export type ModerationSettings = {
  akismet: Scalars['Boolean']['output']
  blackListPostTypeIds: Array<Scalars['String']['output']>
  blackListSpaceIds: Array<Scalars['String']['output']>
  customBlacklist?: Maybe<Array<Scalars['String']['output']>>
  enableBlacklisting: Scalars['Boolean']['output']
  member: ModerationMemberSettings
  oopSpam: Scalars['Boolean']['output']
  preventPublish: Scalars['Boolean']['output']
  useDefaultBlacklisting?: Maybe<Scalars['Boolean']['output']>
}

export enum ModerationStatus {
  ACCEPTED = 'ACCEPTED',
  PendingConfirmation = 'PendingConfirmation',
  REJECTED = 'REJECTED',
  REVIEW = 'REVIEW',
}

export type MultiPartUploadInput = {
  /** The files to upload */
  fileInputs?: InputMaybe<Array<CreateFileInput>>
  /** The images to upload */
  imageInputs?: InputMaybe<Array<CreateImageInput>>
  /** The maximum size of each part in bytes. This will be used to calculate the number of parts. Must be between 5MiB and 100MiB. If a value outside of this range is provided, it will be automatically set to the nearest valid value. */
  maxPartSize?: InputMaybe<Scalars['Float']['input']>
}

export type MultiPartUploadUrls = {
  /** The URL to abort the multi-part upload. Use this to cancel the upload if needed. */
  abortUrl: Scalars['String']['output']
  /** The URL to download the media. */
  mediaDownloadUrl: Scalars['String']['output']
  /** The ID of the media. */
  mediaId: Scalars['String']['output']
  /** The URL to access the media. */
  mediaUrl: Scalars['String']['output']
  /** The URLs to upload the parts of the media. The URLs are signed and will expire after 2 hours. */
  partUrls: Array<PartUrl>
  /** The URLs to access the uploaded images at different sizes. Null if the media is not an image. */
  urls?: Maybe<MediaUrls>
}

export type Mutation = {
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  addEmoji: Emoji
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  addEmojis: Array<Emoji>
  /** Add the FCM token to the subscriber settings. */
  addFcmTokenToSubscriberSettings: Action
  /** @deprecated This mutation will be replaced by createCollection */
  addGroup: Collection
  /** @deprecated This mutation will be replaced by createImages */
  addImage: SignedUrl
  /** @deprecated This mutation will be replaced by createImages */
  addImages: Array<SignedUrl>
  /** @deprecated This mutation will be replaced by createImages or createEmojis */
  addMedias: Array<SignedUrl>
  addMemberSchemaField: Network
  /** Add members to a group chat */
  addMembersToGroup: Action
  /** @deprecated This mutation will be replaced by createModerationReport */
  addModerationReport: ModerationItem
  /** @deprecated This mutation will be replaced by createNetwork */
  addNetwork: AuthTokenWithOtp
  /** @deprecated This mutation will be replaced by updateNewDomain */
  addNewDomain: DomainTransferStatus
  /** @deprecated This mutation will be replaced by createPost */
  addPost: Post
  addPostTypeField: PostType
  addReaction: Action
  /** @deprecated This mutation will be replaced by createReply */
  addReply: Post
  /** @deprecated This mutation will be replaced by createSpace */
  addSpace: Space
  addSpaceMembers: Array<SpaceMember>
  addTemplateToNetwork: TemplateRequest
  /** Set the latest message read by the member in the chat */
  advanceReadMessageOffset: AdvanceReadMessageOffsetResult
  /** @deprecated This mutation will be replaced by approveSpaceMembershipRequest */
  approveSpaceJoinRequest: Action
  approveSpaceMembershipRequest: Action
  /** Archive a chat */
  archiveChat: Action
  archiveMemberSchemaField: Network
  archivePostType: PostType
  archivePostTypeField: PostType
  assignBadge: Action
  blockMember: Action
  callback: CallbackResponse
  cancelDomainTransfer: Action
  cancelEmailUpdate: Action
  cancelNetworkDeletion: Action
  /** Cast a vote on a poll using a vote token */
  castVote: Poll
  changeHomepage: Action
  clearNewDomain: Action
  clearNotificationsCount: Action
  closeSpace: Action
  commitDomainTransfer: Action
  /** This will mark the multi-part upload as complete. The upload must be completed before the media is available. The media will be returned if the upload was successful. An error will be returned if the upload failed. */
  completeMultiPartUpload: Array<CompletedMultiPartUpload>
  confirmMassActionRequest: MassActionRequest
  confirmResetPassword: Action
  createAccessGroup: AccessGroup
  createBadge: Badge
  createBillingPortalSession: BillingPortalSession
  createCollection: Collection
  /** Create a draft post. This will also allow scheduling by filling in the scheduledFor field in the input. */
  createDraftPost: Post
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  createEmojis: Array<Emoji>
  createExportMemberRequest: Export
  createFiles: Array<SignedUrl>
  /** Create a group chat */
  createGroupChat: Chat
  createImages: Array<SignedUrl>
  createMassActionRequest: MassActionRequest
  createModerationReport: ModerationItem
  createNetwork: AuthTokenWithOtp
  createOidc: Oidc
  createPermission: Permission
  /** Create a new poll */
  createPoll: Poll
  /** Create a new post in a space. */
  createPost: Post
  /** Create a new post type. */
  createPostType: PostType
  /** Add a comment to a post. */
  createReply: Post
  /** @deprecated This mutation will be replaced by createModerationReport */
  createReport: ModerationItem
  /** Create a space inside your community. */
  createSpace: Space
  createSpaceFromTemplate: TemplateRequest
  createSubscriptionCheckoutSession: SubscriptionCheckoutSession
  /** Create a new tag */
  createTag: Tag
  createTemplate: Template
  /** @deprecated This mutation will be replaced by declineSpaceMembershipRequest */
  declineSpaceJoinRequest: Action
  declineSpaceMembershipRequest: Action
  deleteAccessGroup: Action
  deleteBadge: Action
  deleteCollection: Action
  deleteMember: Action
  deleteMemberSchemaField: Network
  deleteNetwork: Action
  deleteNotification: Action
  deleteNotifications: Action
  deleteOidc: Action
  deletePageCustomResponse: Action
  deletePermission: Action
  /** Delete a post. This is a soft delete at first and will eventually be fully purged from the system. */
  deletePost: Action
  deletePostTypeField: PostType
  deleteSpace: Action
  deleteSpacePostTypes: Action
  deleteSsoMembership: Action
  deleteTag: Action
  deleteTemplate: Action
  /** Demote members from admin in a group chat. Only group chat owners or site staff can perform this action. */
  demoteChatAdmins: Action
  /** @deprecated This mutation will be replaced by updatePasswordWithToken */
  doResetPassword: Action
  /** @deprecated This mutation will be replaced by updateImage */
  editImage: Image
  /** Edit a message in a chat */
  editMessage: Message
  /** @deprecated Use the global gateway instead */
  globalAddAppCollaborator: AppCollaborator
  /** @deprecated Use the global gateway instead */
  globalCreateApp: App
  /** @deprecated Use Glyphs instead, just update the media id with `emoji/...` */
  globalCreateEmojis: Array<Emoji>
  /** @deprecated Use the global gateway instead */
  globalCreateImages: Array<SignedUrl>
  /** @deprecated Use the global gateway instead */
  globalDeleteApp: Action
  /** @deprecated Use the global gateway instead */
  globalDeleteAppSetting: AppSetting
  /** @deprecated Use the global gateway instead */
  globalPublishAppPrivately: AppPublication
  /** @deprecated Use the global gateway instead */
  globalRegenerateClientSecret: App
  /** @deprecated Use the global gateway instead */
  globalRemoveAppCollaborator: Action
  /** @deprecated Use the global gateway instead */
  globalTestAppWebhook: Action
  /** @deprecated Use the global gateway instead */
  globalUnPublishAppPrivately: Action
  /** @deprecated Use the global gateway instead */
  globalUpdateApp: App
  /** @deprecated Use the global gateway instead */
  globalUpdateAppSetting: AppSetting
  hidePost: Action
  impersonateLoginToNetwork: AuthInfoWithOtp
  installApp: AppInstallation
  installAppOnAuthMember: AppInstallation
  interactWithApps: Array<AppInteraction>
  /** Invite members to join your community. */
  inviteMembers: Array<MemberInvitation>
  joinNetwork: AuthToken
  joinNetworkWithInvitationLink: AuthToken
  joinNetworkWithToken: AuthToken
  joinSpace: Action
  /** Leave a group chat */
  leaveGroupChat: Action
  leaveSpace: Action
  loginNetwork: AuthToken
  loginNetworkWithPassword: AuthToken
  loginWithSamlResponse: AuthToken
  loginWithSsoCode: AuthToken
  logoutMemberSessions: Action
  logoutNetwork: Action
  modifySubscriptionAddon: Action
  /** Move a post to a different space. */
  movePost: Post
  /** Move multiple posts to a different space. */
  movePosts: Array<Post>
  /** This allows uploading files in chunks, useful for large files. The upload must be completed using completeMultiPartUpload before it will be available. */
  multiPartUpload: Array<MultiPartUploadUrls>
  nominateNewDomain: Action
  organizeCollections: Action
  /** @deprecated This mutation will be replaced by organizeSpacesInCollection */
  organizeGroupSpaces: Action
  /** @deprecated This mutation will be replaced by organizeCollections */
  organizeGroups: Action
  organizeSpacesInCollection: Action
  pinPostToSpace: Action
  pinReplyToPost: Action
  /** Promote members to admin in a group chat. Only a chat admin can promote members to admin in the chat. */
  promoteChatAdmins: Action
  publishAppPrivately: AppPublication
  /** This will immediately publish a draft post. */
  publishPost: Post
  publishTemplate: Action
  /** Permanently delete a chat and all associated data. Only staff members can perform this action. */
  purgeChat: Action
  purgeMedias: Array<MediaBase>
  readNotification: Action
  readNotifications: Action
  readSpace: Action
  regenerateJwtSsoToken: JwtSsoToken
  /** Remove the FCM token from the subscriber settings. */
  removeFcmTokenFromSubscriberSettings: Action
  /** @deprecated This mutation will be replaced by deleteCollection */
  removeGroup: Action
  /** @deprecated This mutation will be replaced by deleteMember */
  removeMember: Action
  /** Remove members from a group chat */
  removeMembersFromGroup: Action
  /** @deprecated This mutation will be replaced by deleteNetwork */
  removeNetwork: Action
  /** @deprecated This mutation will be replaced by deletePost */
  removePost: Action
  removeReaction: Action
  removeSpaceMembers: Array<Action>
  /** Reorder a single badge, moving it directly after the badge with specified using previousBadgeId or to the beginning of the list if not provided */
  reorderBadge: Badge
  /** Reorder all badges for the network, using the badgeOrderId input field */
  reorderBadges: Action
  reorderMemberSchemaFields: Network
  reorderPostTypeFields: PostType
  /** @deprecated Use the global gateway instead */
  requestGlobalTokenCode: Action
  requestSpaceMembership: SpaceJoinRequest
  /** @deprecated Use the global gateway instead */
  resendGlobalTokenCode: Action
  resendMemberInvitation: Action
  resendVerification: Action
  /** @deprecated This mutation will be replaced by sendResetPasswordEmail */
  resetPassword: Action
  revokeBadge: Action
  revokeMemberInvitation: Action
  runMigration: Migration
  sendEmailDigestPreview: Action
  /** Send message to an existing chat identified by its ID. */
  sendMessageToChat: NewMessage
  /** Send message to a member. Will create a new conversation between the parties if it doesn’t already exist. */
  sendMessageToMember: NewMessage
  sendResetPasswordEmail: Action
  setPrivatelyPublishedApps: Array<AppPublication>
  /** @deprecated This mutation will be replaced by loginWithSsoCode */
  ssoRedirect: AuthToken
  /** Subscribe the auth member to the given publisher. */
  subscribe: Action
  /** @deprecated This mutation will be replaced by loginSupportWithSsoCode */
  supportSsoRedirect: SupportAuthToken
  suspendMember: Action
  syncTemplate: Template
  /** Transfer ownership of a group chat */
  transferGroupChatOwnership: Action
  /** Transfer ownership of a network to another member. Only support tokens can perform this action. */
  transferNetworkOwnership: Action
  transferToNewDomain: Action
  triggerEmailDigest: Action
  unArchiveMemberSchemaField: Network
  unPublishAppPrivately: ActionStatus
  /** Unarchive a chat */
  unarchiveChat: Action
  unarchivePostType: PostType
  unarchivePostTypeField: PostType
  unblockMember: Action
  /** WARNING: This is an unstable API that does not handle subscriptions, integrations, or potential conflicts. Use at your own risk. */
  undoMembersDeletion: Action
  /** WARNING: This is an unstable API that does not handle subscriptions, integrations, or potential conflicts. Use at your own risk. */
  undoPostsDeletion: Action
  unhidePost: Action
  uninstallApp?: Maybe<AppInstallation>
  unpinPostFromSpace: Action
  unpinReplyFromPost: Action
  unpublishTemplate: Action
  unsetHomepage: Action
  /** Unsubscribe the auth member from the given publisher. */
  unsubscribe: Action
  unsubscribeFromNotification: Action
  unsuspendMember: Action
  updateAccessGroup: AccessGroup
  updateAppInstallation: AppInstallation
  updateAppNetworkSettings: AppAction
  updateAppSpaceSetting: AppAction
  updateAppStanding: ActionStatus
  updateAppStatus: ActionStatus
  updateAuthMember: Member
  updateBadge: Badge
  updateCollection: Action
  updateCustomSso: Sso
  updateDefaultSsoStatus: Action
  updateFile: File
  /** @deprecated This mutation will be replaced by updateCollection */
  updateGroup: Action
  /** Update a group chat */
  updateGroupChat: Chat
  updateImage: Image
  updateJwtSso: Sso
  updateMember: Member
  updateMemberInvitation: MemberInvitation
  updateMemberSchemaField: Network
  updateMemberSpaceRole: Action
  /** @deprecated This mutation will be replaced by updateModerationItem */
  updateModeration: Action
  updateModerationItem: Action
  updateModerationSettings: ModerationSettings
  updateNetwork: Network
  updateNetworkAvailableLocales: Network
  /** @deprecated This mutation has been replaced by Stripe */
  updateNetworkCustomCapacities: Network
  updateNetworkDomainSubfolder: Network
  updateNetworkMediaSettings: MediaNetworkSettings
  updateNetworkNotificationSettings: NotificationNetworkSettings
  updateNetworkSearchSettings: SearchNetworkSettings
  updateNetworkStatus: Action
  updateNewDomain: DomainTransferStatus
  updateOidc: Oidc
  updatePasswordWithToken: Action
  updatePermission: Permission
  /** Update an existing poll. Poll authors and network admins/moderators can update any poll. Additional permissions apply based on poll context (post ownership, space edit access). */
  updatePoll: Poll
  updatePost: Post
  updatePostType: PostType
  updatePostTypeField: PostType
  /** Update the publisher settings for the given publisher. */
  updatePublisherSettings: Action
  updateSpace: Space
  updateSpaceHighlightedTags: Action
  /** @deprecated This mutation will be replaced by updateMemberSpaceRole */
  updateSpaceMemberRole: Action
  updateSpacePostTypes: Array<SpacePostType>
  /** Update the subscriber settings for the auth member. */
  updateSubscriberSettings: Action
  updateSubscriptionInterval: Action
  updateSubscriptionPlan: Action
  updateTag: Tag
  updateTemplate: Template
  uploadMigrationFiles: UploadedMigrations
  upsertExtraProperty: Action
  upsertPageCustomResponse: PageDetailedCustomResponse
  upsertTheme: NewTheme
  verifyMember: AuthToken
}

export type MutationAddEmojiArgs = {
  input: CreateEmojiInput
}

export type MutationAddEmojisArgs = {
  input: Array<CreateEmojiInput>
}

export type MutationAddFcmTokenToSubscriberSettingsArgs = {
  token: Scalars['String']['input']
}

export type MutationAddGroupArgs = {
  input: CreateCollectionInput
}

export type MutationAddImageArgs = {
  input: CreateImageInput
}

export type MutationAddImagesArgs = {
  input: Array<CreateImageInput>
}

export type MutationAddMediasArgs = {
  input: AddMediasInput
}

export type MutationAddMemberSchemaFieldArgs = {
  input: CustomFieldSchemaInput
}

export type MutationAddMembersToGroupArgs = {
  chatId: Scalars['String']['input']
  input: AddMembersToGroupInput
}

export type MutationAddModerationReportArgs = {
  input: CreateReportInput
}

export type MutationAddNetworkArgs = {
  input: AddNetworkInput
}

export type MutationAddNewDomainArgs = {
  input: DomainAvailabilityInput
}

export type MutationAddPostArgs = {
  input: CreatePostInput
  spaceId: Scalars['ID']['input']
}

export type MutationAddPostTypeFieldArgs = {
  id: Scalars['ID']['input']
  input: CustomFieldSchemaInput
}

export type MutationAddReactionArgs = {
  input: AddReactionInput
  postId: Scalars['ID']['input']
}

export type MutationAddReplyArgs = {
  input: CreatePostInput
  postId: Scalars['ID']['input']
}

export type MutationAddSpaceArgs = {
  input: CreateSpaceInput
}

export type MutationAddSpaceMembersArgs = {
  input: Array<AddSpaceMemberInput>
  spaceId: Scalars['ID']['input']
}

export type MutationAddTemplateToNetworkArgs = {
  excludeEntityTypes?: InputMaybe<Array<TemplateEntityType>>
  templateId: Scalars['String']['input']
}

export type MutationAdvanceReadMessageOffsetArgs = {
  chatId: Scalars['String']['input']
  input: AdvanceReadMessageOffsetInput
  returnNewCount?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationApproveSpaceJoinRequestArgs = {
  spaceId: Scalars['ID']['input']
  spaceJoinRequestId: Scalars['ID']['input']
}

export type MutationApproveSpaceMembershipRequestArgs = {
  spaceId: Scalars['ID']['input']
  spaceMembershipRequestId: Scalars['ID']['input']
}

export type MutationArchiveChatArgs = {
  chatId: Scalars['String']['input']
}

export type MutationArchiveMemberSchemaFieldArgs = {
  key: Scalars['String']['input']
}

export type MutationArchivePostTypeArgs = {
  id: Scalars['ID']['input']
}

export type MutationArchivePostTypeFieldArgs = {
  id: Scalars['ID']['input']
  key: Scalars['String']['input']
}

export type MutationAssignBadgeArgs = {
  id: Scalars['String']['input']
  input: AssignOrRevokeBadgeInput
}

export type MutationBlockMemberArgs = {
  memberId: Scalars['String']['input']
}

export type MutationCallbackArgs = {
  appId: Scalars['ID']['input']
  callbackId: Scalars['ID']['input']
  context: PermissionContext
  dynamicBlockId?: InputMaybe<Scalars['ID']['input']>
  entityId?: InputMaybe<Scalars['ID']['input']>
  inputs?: InputMaybe<Scalars['String']['input']>
}

export type MutationCancelEmailUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type MutationCastVoteArgs = {
  input: VoteInput
}

export type MutationChangeHomepageArgs = {
  spaceId: Scalars['String']['input']
  type?: InputMaybe<HomeSpaceType>
}

export type MutationCloseSpaceArgs = {
  spaceId: Scalars['ID']['input']
}

export type MutationCompleteMultiPartUploadArgs = {
  input: Array<CompleteMultiPartUploadInput>
}

export type MutationConfirmMassActionRequestArgs = {
  massActionRequestId: Scalars['String']['input']
}

export type MutationConfirmResetPasswordArgs = {
  input: ConfirmResetPasswordInput
}

export type MutationCreateAccessGroupArgs = {
  input: CreateAccessGroupInput
}

export type MutationCreateBadgeArgs = {
  input: CreateBadgeInput
}

export type MutationCreateBillingPortalSessionArgs = {
  returnUrl: Scalars['String']['input']
}

export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput
}

export type MutationCreateDraftPostArgs = {
  input: CreateDraftPostInput
  spaceId: Scalars['ID']['input']
}

export type MutationCreateEmojisArgs = {
  input: Array<CreateEmojiInput>
}

export type MutationCreateExportMemberRequestArgs = {
  input: ExportInput
}

export type MutationCreateFilesArgs = {
  input: Array<CreateFileInput>
}

export type MutationCreateGroupChatArgs = {
  input: CreateGroupChatInput
}

export type MutationCreateImagesArgs = {
  input: Array<CreateImageInput>
}

export type MutationCreateMassActionRequestArgs = {
  input: MassActionRequestInput
}

export type MutationCreateModerationReportArgs = {
  input: CreateReportInput
}

export type MutationCreateNetworkArgs = {
  input: AddNetworkInput
}

export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput
}

export type MutationCreatePollArgs = {
  input: CreatePollInput
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
  spaceId: Scalars['ID']['input']
}

export type MutationCreatePostTypeArgs = {
  input: CreatePostTypeInput
}

export type MutationCreateReplyArgs = {
  input: CreatePostInput
  postId: Scalars['ID']['input']
}

export type MutationCreateReportArgs = {
  input: CreateReportInput
}

export type MutationCreateSpaceArgs = {
  input: CreateSpaceInput
}

export type MutationCreateSpaceFromTemplateArgs = {
  excludeEntityTypes?: InputMaybe<Array<TemplateEntityType>>
  input: CreateSpaceInput
  style?: InputMaybe<Scalars['String']['input']>
  templateId: Scalars['String']['input']
}

export type MutationCreateSubscriptionCheckoutSessionArgs = {
  cancelUrl: Scalars['String']['input']
  priceId: Scalars['String']['input']
  successUrl: Scalars['String']['input']
}

export type MutationCreateTagArgs = {
  input: CreateTagInput
}

export type MutationCreateTemplateArgs = {
  input: CreateTemplateInput
}

export type MutationDeclineSpaceJoinRequestArgs = {
  spaceId: Scalars['ID']['input']
  spaceJoinRequestId: Scalars['ID']['input']
}

export type MutationDeclineSpaceMembershipRequestArgs = {
  spaceId: Scalars['ID']['input']
  spaceMembershipRequestId: Scalars['ID']['input']
}

export type MutationDeleteAccessGroupArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteBadgeArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteMemberSchemaFieldArgs = {
  key: Scalars['String']['input']
}

export type MutationDeleteNotificationArgs = {
  notificationId: Scalars['ID']['input']
}

export type MutationDeleteNotificationsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type MutationDeleteOidcArgs = {
  id: Scalars['String']['input']
}

export type MutationDeletePageCustomResponseArgs = {
  path: Scalars['String']['input']
}

export type MutationDeletePermissionArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePostArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePostTypeFieldArgs = {
  id: Scalars['ID']['input']
  key: Scalars['String']['input']
}

export type MutationDeleteSpaceArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteSpacePostTypesArgs = {
  postTypeIds: Array<Scalars['ID']['input']>
  spaceId: Scalars['ID']['input']
}

export type MutationDeleteSsoMembershipArgs = {
  memberId: Scalars['String']['input']
  type: SsoType
}

export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteTemplateArgs = {
  id: Scalars['String']['input']
}

export type MutationDemoteChatAdminsArgs = {
  chatId: Scalars['String']['input']
  input: DemoteChatAdminsInput
}

export type MutationDoResetPasswordArgs = {
  input: UpdatePasswordWithTokenInput
}

export type MutationEditImageArgs = {
  imageId: Scalars['String']['input']
  input: UpdateImageInput
}

export type MutationEditMessageArgs = {
  chatId: Scalars['String']['input']
  input: EditMessageInput
}

export type MutationGlobalAddAppCollaboratorArgs = {
  appId: Scalars['String']['input']
  input: AddAppCollaboratorInput
}

export type MutationGlobalCreateAppArgs = {
  input: CreateAppInput
}

export type MutationGlobalCreateEmojisArgs = {
  input: Array<CreateEmojiInput>
}

export type MutationGlobalCreateImagesArgs = {
  input: Array<CreateImageInput>
}

export type MutationGlobalDeleteAppArgs = {
  id: Scalars['ID']['input']
}

export type MutationGlobalDeleteAppSettingArgs = {
  context: PermissionContext
  entityId?: InputMaybe<Scalars['ID']['input']>
  networkId: Scalars['ID']['input']
}

export type MutationGlobalPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input']
  networkId: Scalars['ID']['input']
}

export type MutationGlobalRegenerateClientSecretArgs = {
  appId: Scalars['ID']['input']
}

export type MutationGlobalRemoveAppCollaboratorArgs = {
  appId: Scalars['String']['input']
  collaboratorId: Scalars['String']['input']
}

export type MutationGlobalTestAppWebhookArgs = {
  appId: Scalars['ID']['input']
  input: TestAppWebhookInput
}

export type MutationGlobalUnPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input']
  networkId: Scalars['ID']['input']
}

export type MutationGlobalUpdateAppArgs = {
  id: Scalars['ID']['input']
  input: UpdateAppInput
}

export type MutationGlobalUpdateAppSettingArgs = {
  context: PermissionContext
  entityId?: InputMaybe<Scalars['ID']['input']>
  networkId: Scalars['ID']['input']
  settings: Scalars['String']['input']
}

export type MutationHidePostArgs = {
  id: Scalars['ID']['input']
}

export type MutationImpersonateLoginToNetworkArgs = {
  input: ImpersonateLoginToNetworkInput
}

export type MutationInstallAppArgs = {
  appId: Scalars['ID']['input']
  input?: InputMaybe<InstallAppInput>
}

export type MutationInstallAppOnAuthMemberArgs = {
  appId: Scalars['ID']['input']
  input?: InputMaybe<InstallAppInput>
}

export type MutationInteractWithAppsArgs = {
  context: PermissionContext
  entityId?: InputMaybe<Scalars['ID']['input']>
  input: Array<InteractWithAppInput>
}

export type MutationInviteMembersArgs = {
  input: InviteMembersInput
}

export type MutationJoinNetworkArgs = {
  input: JoinNetworkInput
}

export type MutationJoinNetworkWithInvitationLinkArgs = {
  input: JoinNetworkWithLinkInput
}

export type MutationJoinNetworkWithTokenArgs = {
  input: JoinNetworkWithTokenInput
}

export type MutationJoinSpaceArgs = {
  spaceId: Scalars['ID']['input']
}

export type MutationLeaveGroupChatArgs = {
  chatId: Scalars['String']['input']
}

export type MutationLeaveSpaceArgs = {
  spaceId: Scalars['ID']['input']
}

export type MutationLoginNetworkArgs = {
  input: LoginNetworkWithPasswordInput
}

export type MutationLoginNetworkWithPasswordArgs = {
  input: LoginNetworkWithPasswordInput
}

export type MutationLoginWithSamlResponseArgs = {
  input: LoginWithSamlResponseInput
}

export type MutationLoginWithSsoCodeArgs = {
  input: LoginWithSsoCodeInput
}

export type MutationLogoutMemberSessionsArgs = {
  memberId: Scalars['String']['input']
}

export type MutationLogoutNetworkArgs = {
  input?: InputMaybe<LogoutNetworkInput>
}

export type MutationModifySubscriptionAddonArgs = {
  priceId: Scalars['String']['input']
  quantity: Scalars['Float']['input']
}

export type MutationMovePostArgs = {
  convertPost?: InputMaybe<ConvertPostInput>
  id: Scalars['ID']['input']
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>
  spaceId: Scalars['ID']['input']
}

export type MutationMovePostsArgs = {
  convertPost?: InputMaybe<ConvertPostInput>
  ids: Array<Scalars['ID']['input']>
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>
  spaceId: Scalars['ID']['input']
}

export type MutationMultiPartUploadArgs = {
  input: MultiPartUploadInput
}

export type MutationNominateNewDomainArgs = {
  domain: Scalars['String']['input']
}

export type MutationOrganizeCollectionsArgs = {
  ids: Array<Scalars['String']['input']>
}

export type MutationOrganizeGroupSpacesArgs = {
  groupId: Scalars['String']['input']
  spaceIds: Array<Scalars['String']['input']>
}

export type MutationOrganizeGroupsArgs = {
  groupIds: Array<Scalars['String']['input']>
}

export type MutationOrganizeSpacesInCollectionArgs = {
  collectionId: Scalars['String']['input']
  spaceIds: Array<Scalars['String']['input']>
}

export type MutationPinPostToSpaceArgs = {
  postId: Scalars['ID']['input']
}

export type MutationPinReplyToPostArgs = {
  postId: Scalars['ID']['input']
  replyId: Scalars['ID']['input']
}

export type MutationPromoteChatAdminsArgs = {
  chatId: Scalars['String']['input']
  input: PromoteChatAdminsInput
}

export type MutationPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input']
}

export type MutationPublishPostArgs = {
  postId: Scalars['ID']['input']
}

export type MutationPublishTemplateArgs = {
  id: Scalars['String']['input']
}

export type MutationPurgeChatArgs = {
  chatId: Scalars['String']['input']
}

export type MutationPurgeMediasArgs = {
  input: PurgeMediasInput
}

export type MutationReadNotificationArgs = {
  notificationId: Scalars['ID']['input']
}

export type MutationReadNotificationsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type MutationReadSpaceArgs = {
  date: Scalars['DateTime']['input']
  spaceId: Scalars['String']['input']
}

export type MutationRemoveFcmTokenFromSubscriberSettingsArgs = {
  token: Scalars['String']['input']
}

export type MutationRemoveGroupArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationRemoveMemberArgs = {
  memberId: Scalars['ID']['input']
}

export type MutationRemoveMembersFromGroupArgs = {
  chatId: Scalars['String']['input']
  input: RemoveMembersFromGroupInput
}

export type MutationRemovePostArgs = {
  postId: Scalars['ID']['input']
}

export type MutationRemoveReactionArgs = {
  participantId?: InputMaybe<Scalars['String']['input']>
  postId: Scalars['ID']['input']
  reaction: Scalars['String']['input']
}

export type MutationRemoveSpaceMembersArgs = {
  memberIds: Array<Scalars['ID']['input']>
  spaceId: Scalars['ID']['input']
}

export type MutationReorderBadgeArgs = {
  id: Scalars['String']['input']
  input: ReorderBadgeInput
}

export type MutationReorderBadgesArgs = {
  input: ReorderBadgesInput
}

export type MutationReorderMemberSchemaFieldsArgs = {
  input: Array<ReOrderSchemaFieldInput>
}

export type MutationReorderPostTypeFieldsArgs = {
  id: Scalars['ID']['input']
  input: Array<ReOrderSchemaFieldInput>
}

export type MutationRequestGlobalTokenCodeArgs = {
  input: RequestGlobalTokenInput
}

export type MutationRequestSpaceMembershipArgs = {
  spaceId: Scalars['ID']['input']
}

export type MutationResendGlobalTokenCodeArgs = {
  input: RequestGlobalTokenInput
}

export type MutationResendMemberInvitationArgs = {
  id: Scalars['ID']['input']
}

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput
}

export type MutationRevokeBadgeArgs = {
  id: Scalars['String']['input']
  input: AssignOrRevokeBadgeInput
}

export type MutationRevokeMemberInvitationArgs = {
  id: Scalars['ID']['input']
}

export type MutationRunMigrationArgs = {
  id: Scalars['String']['input']
}

export type MutationSendEmailDigestPreviewArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationSendMessageToChatArgs = {
  chatId: Scalars['String']['input']
  input: SendMessageToChatInput
}

export type MutationSendMessageToMemberArgs = {
  input: SendMessageToMemberInput
}

export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']['input']
}

export type MutationSetPrivatelyPublishedAppsArgs = {
  ids: Array<Scalars['ID']['input']>
}

export type MutationSsoRedirectArgs = {
  input: LoginWithSsoCodeInput
}

export type MutationSubscribeArgs = {
  publisherId: Scalars['String']['input']
}

export type MutationSupportSsoRedirectArgs = {
  input: LoginSupportWithSsoCodeInput
}

export type MutationSuspendMemberArgs = {
  memberId: Scalars['String']['input']
}

export type MutationSyncTemplateArgs = {
  id: Scalars['String']['input']
  upsertKey?: InputMaybe<Scalars['String']['input']>
}

export type MutationTransferGroupChatOwnershipArgs = {
  chatId: Scalars['String']['input']
  input: TransferGroupChatOwnershipInput
}

export type MutationTransferNetworkOwnershipArgs = {
  input: TransferNetworkOwnershipInput
}

export type MutationTriggerEmailDigestArgs = {
  timeZone: Scalars['String']['input']
}

export type MutationUnArchiveMemberSchemaFieldArgs = {
  key: Scalars['String']['input']
}

export type MutationUnPublishAppPrivatelyArgs = {
  appId: Scalars['ID']['input']
  networkId: Scalars['ID']['input']
}

export type MutationUnarchiveChatArgs = {
  chatId: Scalars['String']['input']
}

export type MutationUnarchivePostTypeArgs = {
  id: Scalars['ID']['input']
}

export type MutationUnarchivePostTypeFieldArgs = {
  id: Scalars['ID']['input']
  key: Scalars['String']['input']
}

export type MutationUnblockMemberArgs = {
  memberId: Scalars['String']['input']
}

export type MutationUndoMembersDeletionArgs = {
  memberIds: Array<Scalars['ID']['input']>
}

export type MutationUndoPostsDeletionArgs = {
  postIds: Array<Scalars['ID']['input']>
}

export type MutationUnhidePostArgs = {
  id: Scalars['ID']['input']
}

export type MutationUninstallAppArgs = {
  appInstallationId: Scalars['ID']['input']
  reason?: InputMaybe<Scalars['String']['input']>
}

export type MutationUnpinPostFromSpaceArgs = {
  postId: Scalars['ID']['input']
}

export type MutationUnpinReplyFromPostArgs = {
  postId: Scalars['ID']['input']
  replyId: Scalars['ID']['input']
}

export type MutationUnpublishTemplateArgs = {
  id: Scalars['String']['input']
}

export type MutationUnsetHomepageArgs = {
  type: HomeSpaceType
}

export type MutationUnsubscribeArgs = {
  publisherId: Scalars['String']['input']
}

export type MutationUnsubscribeFromNotificationArgs = {
  input: UnsubscribeWithTokenInput
}

export type MutationUnsuspendMemberArgs = {
  memberId: Scalars['String']['input']
}

export type MutationUpdateAccessGroupArgs = {
  id: Scalars['ID']['input']
  input: UpdateAccessGroupInput
}

export type MutationUpdateAppInstallationArgs = {
  appInstallationId: Scalars['ID']['input']
  input: UpdateAppInstallationInput
}

export type MutationUpdateAppNetworkSettingsArgs = {
  appId: Scalars['ID']['input']
  settings: Scalars['String']['input']
}

export type MutationUpdateAppSpaceSettingArgs = {
  appId: Scalars['ID']['input']
  settings: Scalars['String']['input']
  spaceId: Scalars['ID']['input']
}

export type MutationUpdateAppStandingArgs = {
  appId: Scalars['ID']['input']
  standing: StoreItemStanding
}

export type MutationUpdateAppStatusArgs = {
  appId: Scalars['ID']['input']
  status: StoreItemStatus
}

export type MutationUpdateAuthMemberArgs = {
  input: UpdateMemberInput
}

export type MutationUpdateBadgeArgs = {
  id: Scalars['String']['input']
  input: UpdateBadgeInput
}

export type MutationUpdateCollectionArgs = {
  id: Scalars['ID']['input']
  input: UpdateCollectionInput
}

export type MutationUpdateCustomSsoArgs = {
  input: UpdateCustomSsoInput
}

export type MutationUpdateDefaultSsoStatusArgs = {
  sso: DefaultSsoType
  status: SsoStatus
}

export type MutationUpdateFileArgs = {
  id: Scalars['String']['input']
  input: UpdateFileInput
}

export type MutationUpdateGroupArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>
  input: UpdateCollectionInput
}

export type MutationUpdateGroupChatArgs = {
  chatId: Scalars['String']['input']
  input: UpdateGroupChatInput
}

export type MutationUpdateImageArgs = {
  id: Scalars['String']['input']
  input: UpdateImageInput
}

export type MutationUpdateJwtSsoArgs = {
  input: UpdateJwtSsoInput
}

export type MutationUpdateMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  input: UpdateMemberInput
}

export type MutationUpdateMemberInvitationArgs = {
  id: Scalars['ID']['input']
  input: UpdateMemberInvitationInput
}

export type MutationUpdateMemberSchemaFieldArgs = {
  input: UpdateCustomFieldSchemaInput
}

export type MutationUpdateMemberSpaceRoleArgs = {
  input: UpdateSpaceMemberRoleInput
  memberId: Scalars['ID']['input']
  spaceId: Scalars['ID']['input']
}

export type MutationUpdateModerationArgs = {
  id: Scalars['ID']['input']
  input: UpdateModerationItemInput
}

export type MutationUpdateModerationItemArgs = {
  id: Scalars['ID']['input']
  input: UpdateModerationItemInput
}

export type MutationUpdateModerationSettingsArgs = {
  input: UpdateModerationSettingsInput
}

export type MutationUpdateNetworkArgs = {
  input: UpdateNetworkInput
}

export type MutationUpdateNetworkAvailableLocalesArgs = {
  availableLocales: Array<Scalars['String']['input']>
}

export type MutationUpdateNetworkCustomCapacitiesArgs = {
  additionalSeats?: InputMaybe<Scalars['Int']['input']>
  customMemberCapacity?: InputMaybe<Scalars['Int']['input']>
}

export type MutationUpdateNetworkDomainSubfolderArgs = {
  domainSubfolder?: InputMaybe<Scalars['String']['input']>
}

export type MutationUpdateNetworkMediaSettingsArgs = {
  input: UpdateMediaNetworkSettingsInput
}

export type MutationUpdateNetworkNotificationSettingsArgs = {
  input: UpdateNotificationNetworkSettingsInput
}

export type MutationUpdateNetworkSearchSettingsArgs = {
  input: UpdateSearchNetworkSettingsInput
}

export type MutationUpdateNetworkStatusArgs = {
  input: UpdateNetworkStatusInput
}

export type MutationUpdateNewDomainArgs = {
  input: UpdateNewDomainInput
}

export type MutationUpdateOidcArgs = {
  id: Scalars['String']['input']
  input: UpdateOidcInput
}

export type MutationUpdatePasswordWithTokenArgs = {
  input: UpdatePasswordWithTokenInput
}

export type MutationUpdatePermissionArgs = {
  id: Scalars['ID']['input']
  input: UpdatePermissionInput
}

export type MutationUpdatePollArgs = {
  id: Scalars['ID']['input']
  input: UpdatePollInput
}

export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input']
  input: UpdatePostInput
}

export type MutationUpdatePostTypeArgs = {
  id: Scalars['ID']['input']
  input: UpdatePostTypeInput
}

export type MutationUpdatePostTypeFieldArgs = {
  id: Scalars['ID']['input']
  input: UpdateCustomFieldSchemaInput
}

export type MutationUpdatePublisherSettingsArgs = {
  input: UpdatePublisherInput
  publisherId: Scalars['String']['input']
}

export type MutationUpdateSpaceArgs = {
  id: Scalars['ID']['input']
  input: UpdateSpaceInput
}

export type MutationUpdateSpaceHighlightedTagsArgs = {
  input: UpdateHighlightedTags
  spaceId: Scalars['ID']['input']
}

export type MutationUpdateSpaceMemberRoleArgs = {
  input: UpdateSpaceMemberRoleInput
  memberId: Scalars['ID']['input']
  spaceId: Scalars['ID']['input']
}

export type MutationUpdateSpacePostTypesArgs = {
  input: Array<UpdateSpacePostTypeInput>
  spaceId: Scalars['ID']['input']
}

export type MutationUpdateSubscriberSettingsArgs = {
  input: UpdateSubscriberInput
}

export type MutationUpdateSubscriptionIntervalArgs = {
  interval: BillingPriceInterval
}

export type MutationUpdateSubscriptionPlanArgs = {
  priceId: Scalars['String']['input']
}

export type MutationUpdateTagArgs = {
  id: Scalars['ID']['input']
  input: UpdateTagInput
}

export type MutationUpdateTemplateArgs = {
  id: Scalars['String']['input']
  input: UpdateTemplateInput
}

export type MutationUploadMigrationFilesArgs = {
  baseUrl?: InputMaybe<Scalars['String']['input']>
  changeMemberEmails?: InputMaybe<Scalars['Boolean']['input']>
  dryRun?: InputMaybe<Scalars['Boolean']['input']>
  members?: InputMaybe<Scalars['Upload']['input']>
  migrationId?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<Scalars['Upload']['input']>
  spaces?: InputMaybe<Scalars['Upload']['input']>
}

export type MutationUpsertExtraPropertyArgs = {
  input: UpsertExtraPropertyInput
}

export type MutationUpsertPageCustomResponseArgs = {
  input: UpsertPageCustomResponse
  path: Scalars['String']['input']
}

export type MutationUpsertThemeArgs = {
  input: UpsertTheme
}

export type MutationVerifyMemberArgs = {
  input: VerifyMemberInput
}

export type NativeFieldsTemplates = {
  description?: Maybe<Scalars['String']['output']>
  thumbnailId?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type NativeFieldsTemplatesInput = {
  description?: InputMaybe<Scalars['String']['input']>
  thumbnailId?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type NavigationItem = {
  link?: Maybe<Scalars['String']['output']>
  openInNewWindow?: Maybe<Scalars['Boolean']['output']>
  text: Scalars['String']['output']
  type: NavigationItemType
}

export enum NavigationItemType {
  PRIMARY_BUTTON = 'PRIMARY_BUTTON',
  PRIMARY_LINK = 'PRIMARY_LINK',
  SECONDARY_BUTTON = 'SECONDARY_BUTTON',
  TEXT_LINK = 'TEXT_LINK',
}

export type NavigationSlateUpdatesInput = {
  footer?: InputMaybe<SlateUpdatesInput>
  footerDisabled?: InputMaybe<Scalars['Boolean']['input']>
  footerFixed?: InputMaybe<Scalars['Boolean']['input']>
  header?: InputMaybe<SlateUpdatesInput>
  headerDisabled?: InputMaybe<Scalars['Boolean']['input']>
  headerFixed?: InputMaybe<Scalars['Boolean']['input']>
  sidebar1?: InputMaybe<SlateUpdatesInput>
  sidebar1Disabled?: InputMaybe<Scalars['Boolean']['input']>
  sidebar1Fixed?: InputMaybe<Scalars['Boolean']['input']>
  sidebar2?: InputMaybe<SlateUpdatesInput>
  sidebar2Disabled?: InputMaybe<Scalars['Boolean']['input']>
  sidebar2Fixed?: InputMaybe<Scalars['Boolean']['input']>
}

export type NavigationSlates = {
  footer?: Maybe<Slate>
  footerDisabled?: Maybe<Scalars['Boolean']['output']>
  footerFixed?: Maybe<Scalars['Boolean']['output']>
  header: Slate
  headerDisabled?: Maybe<Scalars['Boolean']['output']>
  headerFixed?: Maybe<Scalars['Boolean']['output']>
  sidebar1: Slate
  sidebar1Disabled?: Maybe<Scalars['Boolean']['output']>
  sidebar1Fixed?: Maybe<Scalars['Boolean']['output']>
  sidebar2?: Maybe<Slate>
  sidebar2Disabled?: Maybe<Scalars['Boolean']['output']>
  sidebar2Fixed?: Maybe<Scalars['Boolean']['output']>
}

export type Network = {
  activeSso?: Maybe<ActiveSso>
  activeTheme?: Maybe<NewTheme>
  /** @deprecated Has been moved to usageLimits */
  additionalSeatsCapacity?: Maybe<Scalars['Int']['output']>
  aliases: Array<Scalars['String']['output']>
  authMemberProps?: Maybe<NetworkAuthMemberProps>
  availableLocales: Array<Scalars['String']['output']>
  badges?: Maybe<Array<Badge>>
  /** @deprecated It will be stored on Stripe. */
  billingEmail?: Maybe<Scalars['String']['output']>
  /** Has been replaced by activeTheme, but some may still use it */
  brandColor?: Maybe<Scalars['String']['output']>
  companyName?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<Member>
  createdById: Scalars['ID']['output']
  customCodes?: Maybe<Array<CustomCode>>
  /** @deprecated Has been moved to usageLimits */
  customMemberCapacity?: Maybe<Scalars['Int']['output']>
  customSeoDetail?: Maybe<CustomSeoDetail>
  defaultSpaces?: Maybe<Array<Space>>
  description?: Maybe<Scalars['String']['output']>
  domain: Scalars['String']['output']
  domainSubfolder?: Maybe<Scalars['String']['output']>
  extraProperties?: Maybe<Array<ExtraProperty>>
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  /** @deprecated Has been replaced by navigation slates */
  footer?: Maybe<Footer>
  hideDefaultAuthenticationForm: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  images?: Maybe<NetworkImages>
  incidentEmails?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated Has been moved to extraProperties */
  industry?: Maybe<NetworkIndustryType>
  /** @deprecated This field is deprecated. */
  landingPages?: Maybe<NetworkSettings>
  limits?: Maybe<NetworkLimits>
  limitsUpdatedAt?: Maybe<Scalars['DateTime']['output']>
  locale: Scalars['String']['output']
  logo?: Maybe<Media>
  logoId?: Maybe<Scalars['ID']['output']>
  /** @deprecated This resolver will be replaced by limits */
  mediaLimits?: Maybe<MediaLimits>
  /** @deprecated This resolver will be replaced by settings */
  mediaSettings?: Maybe<MediaNetworkSettings>
  /**
   * Calculated member capacity
   * @deprecated Has been moved to usageLimits
   */
  memberCapacity?: Maybe<Scalars['Int']['output']>
  /** @deprecated Has been moved to usageLimits */
  memberCapacityDeclared?: Maybe<Scalars['Int']['output']>
  memberFields?: Maybe<CustomFieldsSchema>
  members?: Maybe<PaginatedMember>
  membersCount?: Maybe<Scalars['Int']['output']>
  membership: NetworkMembership
  name: Scalars['String']['output']
  navigationSlates: NavigationSlates
  newDomain?: Maybe<Scalars['String']['output']>
  /** @deprecated This resolver will be replaced by settings */
  notificationSettings?: Maybe<NotificationNetworkSettings>
  organizationId?: Maybe<Scalars['String']['output']>
  overUsedAt?: Maybe<Scalars['DateTime']['output']>
  owner?: Maybe<Member>
  ownerId: Scalars['ID']['output']
  passwordComplexity: NetworkPasswordComplexity
  planName: Scalars['String']['output']
  postTypes?: Maybe<Array<PostType>>
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>
  referralLink?: Maybe<Scalars['String']['output']>
  referralProgramEnabled: Scalars['Boolean']['output']
  /** @deprecated Has been moved to extraProperties */
  releaseChannel?: Maybe<NetworkReleaseChannelType>
  roles?: Maybe<Array<Role>>
  searchSettings?: Maybe<SearchNetworkSettings>
  /** @deprecated Has been moved to usageLimits */
  seatCapacityDeclared?: Maybe<Scalars['Int']['output']>
  /**
   * Calculated seats capacity
   * @deprecated Has been moved to usageLimits
   */
  seatsCapacity?: Maybe<Scalars['Int']['output']>
  settings?: Maybe<Settings>
  shortcuts?: Maybe<Array<Shortcut>>
  spaces?: Maybe<PaginatedSpace>
  status: NetworkStatus
  statusLocked: Scalars['Boolean']['output']
  statusReason?: Maybe<StatusReason>
  systemSpaces?: Maybe<Array<Space>>
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>
  /** Has been replaced by activeTheme, but some may still use "themes" */
  themes?: Maybe<Themes>
  /** @deprecated Has been replaced by navigation slates */
  topNavigation?: Maybe<TopNavigation>
  tribeBranding: Scalars['Boolean']['output']
  usages?: Maybe<NetworkUsages>
  visibility: NetworkVisibility
  whoCanInvite?: Maybe<Array<Role>>
  whoCanInviteIds: Array<Scalars['ID']['output']>
  willUnpublishAt?: Maybe<Scalars['DateTime']['output']>
}

export type NetworkCustomCodesArgs = {
  anonymize: Scalars['Boolean']['input']
}

export type NetworkExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>
}

export type NetworkMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<Array<MemberStatusInput>>
}

export type NetworkPostTypesArgs = {
  context?: InputMaybe<PostTypeContext>
}

export type NetworkSpacesArgs = {
  limit: Scalars['Int']['input']
}

export type NetworkAuthMemberProps = {
  context: PermissionContext
  permissions?: Maybe<Array<ActionPermissions>>
  /** @deprecated This field will be replaced by Member.settings */
  privateMessagingEnabled?: Maybe<Scalars['Boolean']['output']>
  scopes?: Maybe<Array<Scalars['String']['output']>>
  totalUnreadPostsCount?: Maybe<Scalars['Int']['output']>
}

export type NetworkAuthMemberPropsTotalUnreadPostsCountArgs = {
  type?: InputMaybe<Array<SpaceType>>
}

export type NetworkCurrentUsages = {
  /** If true, AI search is allowed */
  aiSearchAccess: Scalars['Boolean']['output']
  /** If true, analytics access is allowed */
  analyticsAccess: Scalars['Boolean']['output']
  /** Maximum number of days of analytics data, if null, unlimited */
  analyticsDaysLimit?: Maybe<Scalars['Float']['output']>
  /** If true, API access is allowed */
  apiAccess: Scalars['Boolean']['output']
  /** API request limits */
  apiRequestCapacity: Array<ApiRequestLimit>
  /** List of purchased apps ids */
  appIds: Array<Scalars['String']['output']>
  /** If true, Ask AI is allowed */
  askAiAccess: Scalars['Boolean']['output']
  /** If true, audit log access is allowed */
  auditLogAccess: Scalars['Boolean']['output']
  /** If true, custom domain is allowed */
  customDomain: Scalars['Boolean']['output']
  /** If true, site can set a different media upload target domain */
  customUploadDestination?: Maybe<Scalars['Boolean']['output']>
  /** If true, allows disabling Bettermode branding */
  disableBettermodeBranding: Scalars['Boolean']['output']
  /** If true, email customization is allowed */
  emailCustomization: Scalars['Boolean']['output']
  /** If true, email digest access is allowed */
  emailDigestAccess: Scalars['Boolean']['output']
  /** If true, JWT SSO access is allowed */
  jwtSSOAccess: Scalars['Boolean']['output']
  /** Maximum size per file attachment allowed in bytes, if null, limited to 2047 MB (32bit integer) */
  maximumAttachmentSizeLimit?: Maybe<Scalars['Float']['output']>
  /** Number of members allowed, if null, unlimited */
  membersCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, allows modifying allowed file types */
  modifyAllowedFileTypes: Scalars['Boolean']['output']
  /** Number of monthly emails allowed, if null, unlimited */
  monthlyEmailCapacity?: Maybe<Scalars['Float']['output']>
  /** Number of monthly visitors allowed, if null, unlimited */
  monthlyVisitorCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, OAuth2 SSO access is allowed */
  oauth2SSOAccess: Scalars['Boolean']['output']
  /** Number of post types allowed, if null, unlimited */
  postTypesCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, SAML SSO access is allowed */
  samlSSOAccess: Scalars['Boolean']['output']
  /** Number of seats allowed, if null, unlimited */
  seatsCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, sitemap access is allowed */
  sitemap: Scalars['Boolean']['output']
  /** Number of spaces allowed, if null, unlimited */
  spacesCapacity?: Maybe<Scalars['Float']['output']>
  /** Allowed storage size, if null, unlimited */
  storageCapacity?: Maybe<Scalars['Float']['output']>
  /** Number of translation locales allowed, if null, unlimited */
  translationLocaleCapacity?: Maybe<Scalars['Float']['output']>
}

export type NetworkImages = {
  darkFavicon?: Maybe<Media>
  darkLogo?: Maybe<Media>
  darkMobileLogo?: Maybe<Media>
  lightFavicon?: Maybe<Media>
  lightLogo?: Maybe<Media>
  lightMobileLogo?: Maybe<Media>
}

export type NetworkImagesInput = {
  darkFaviconId?: InputMaybe<Scalars['String']['input']>
  darkLogoId?: InputMaybe<Scalars['String']['input']>
  darkMobileLogoId?: InputMaybe<Scalars['String']['input']>
  lightFaviconId?: InputMaybe<Scalars['String']['input']>
  lightLogoId?: InputMaybe<Scalars['String']['input']>
  lightMobileLogoId?: InputMaybe<Scalars['String']['input']>
}

export enum NetworkIndustryType {
  BloggerCoachCreator = 'BloggerCoachCreator',
  ConsultingAndAgency = 'ConsultingAndAgency',
  EcomerceAndRetail = 'EcomerceAndRetail',
  EntertainmentAndEvents = 'EntertainmentAndEvents',
  FinancianServices = 'FinancianServices',
  Healthcare = 'Healthcare',
  InternetAndOnlineService = 'InternetAndOnlineService',
  MediaAndPublishing = 'MediaAndPublishing',
  NonProfitAndAssociation = 'NonProfitAndAssociation',
  OnlineTrainingAndEducation = 'OnlineTrainingAndEducation',
  Other = 'Other',
  SoftwareAndSaas = 'SoftwareAndSaas',
}

export enum NetworkLandingPage {
  EXPLORE = 'EXPLORE',
  FEED = 'FEED',
  SPACES = 'SPACES',
}

export type NetworkLimits = {
  analyticsLimits?: Maybe<AnalyticsLimits>
  /** @deprecated There is no limit on file size anymore */
  fileSizeLimit?: Maybe<Scalars['Float']['output']>
  /** @deprecated There is no limit on file types anymore */
  fileTypesLimit?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated There is no limit on image size anymore */
  imageSizeLimit?: Maybe<Scalars['Float']['output']>
  /** @deprecated There is no limit on image types anymore */
  imageTypesLimit?: Maybe<Array<Scalars['String']['output']>>
  usageLimits: NetworkUsageLimits
}

export enum NetworkMembership {
  inviteOnly = 'inviteOnly',
  open = 'open',
}

export enum NetworkPasswordComplexity {
  Complex = 'Complex',
  Simple = 'Simple',
  Standard = 'Standard',
}

export enum NetworkPrimaryMembersType {
  Customers = 'Customers',
  Employees = 'Employees',
  Members = 'Members',
  Other = 'Other',
  Students = 'Students',
}

export type NetworkPublicInfo = {
  domain: Scalars['String']['output']
  domainSubfolder?: Maybe<Scalars['String']['output']>
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<NetworkImages>
  jwtSsoAuthUrls?: Maybe<JwtSsoAuthUrls>
  logo?: Maybe<Media>
  logoId?: Maybe<Scalars['ID']['output']>
  membership: NetworkMembership
  name: Scalars['String']['output']
  status: NetworkStatus
  systemSpaces?: Maybe<Array<Space>>
  visibility: NetworkVisibility
}

export enum NetworkReleaseChannelType {
  edge = 'edge',
  stable = 'stable',
}

export type NetworkSettings = {
  landingPageForGuest: NetworkLandingPage
  landingPageForMember: NetworkLandingPage
  landingPageForNewMember: NetworkLandingPage
}

export type NetworkSettingsInput = {
  captcha?: InputMaybe<CaptchaSettingsInput>
  contentTranslation?: InputMaybe<ContentTranslationSettingsInput>
  memberPermissions?: InputMaybe<MemberPermissionsSettingsInput>
  privateMessaging?: InputMaybe<PrivateMessagingSettingsInput>
  xFrameEmbedding?: InputMaybe<XFrameEmbeddingSettingsInput>
}

export enum NetworkStatus {
  archived = 'archived',
  published = 'published',
  unpublished = 'unpublished',
}

export enum NetworkStatusChangedBy {
  admin = 'admin',
  support = 'support',
  system = 'system',
}

export enum NetworkStatusReason {
  memberCapacityExceeded = 'memberCapacityExceeded',
  networkCreated = 'networkCreated',
  networkLockLifted = 'networkLockLifted',
  seatsCapacityExceeded = 'seatsCapacityExceeded',
  trialEnded = 'trialEnded',
}

export enum NetworkTimeframeType {
  FewMonths = 'FewMonths',
  FewWeeks = 'FewWeeks',
  NotSure = 'NotSure',
  VerySoon = 'VerySoon',
}

export type NetworkUsageLimits = {
  /** If true, AI search is allowed */
  aiSearchAccess: Scalars['Boolean']['output']
  /** If true, analytics access is allowed */
  analyticsAccess: Scalars['Boolean']['output']
  /** Maximum number of days of analytics data, if null, unlimited */
  analyticsDaysLimit?: Maybe<Scalars['Float']['output']>
  /** If true, API access is allowed */
  apiAccess: Scalars['Boolean']['output']
  /** API request limits */
  apiRequestCapacity: Array<ApiRequestLimit>
  /** List of purchased apps ids */
  appIds: Array<Scalars['String']['output']>
  /** If true, Ask AI is allowed */
  askAiAccess: Scalars['Boolean']['output']
  /** If true, audit log access is allowed */
  auditLogAccess: Scalars['Boolean']['output']
  /** If true, custom domain is allowed */
  customDomain: Scalars['Boolean']['output']
  /** If true, site can set a different media upload target domain */
  customUploadDestination?: Maybe<Scalars['Boolean']['output']>
  /** If true, allows disabling Bettermode branding */
  disableBettermodeBranding: Scalars['Boolean']['output']
  /** If true, email customization is allowed */
  emailCustomization: Scalars['Boolean']['output']
  /** If true, email digest access is allowed */
  emailDigestAccess: Scalars['Boolean']['output']
  /** If true, JWT SSO access is allowed */
  jwtSSOAccess: Scalars['Boolean']['output']
  /** Maximum size per file attachment allowed in bytes, if null, limited to 2047 MB (32bit integer) */
  maximumAttachmentSizeLimit?: Maybe<Scalars['Float']['output']>
  /** Number of members allowed, if null, unlimited */
  membersCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, allows modifying allowed file types */
  modifyAllowedFileTypes: Scalars['Boolean']['output']
  /** Number of monthly emails allowed, if null, unlimited */
  monthlyEmailCapacity?: Maybe<Scalars['Float']['output']>
  /** Number of monthly visitors allowed, if null, unlimited */
  monthlyVisitorCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, OAuth2 SSO access is allowed */
  oauth2SSOAccess: Scalars['Boolean']['output']
  /** Number of post types allowed, if null, unlimited */
  postTypesCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, SAML SSO access is allowed */
  samlSSOAccess: Scalars['Boolean']['output']
  /** Number of seats allowed, if null, unlimited */
  seatsCapacity?: Maybe<Scalars['Float']['output']>
  /** If true, sitemap access is allowed */
  sitemap: Scalars['Boolean']['output']
  /** Number of spaces allowed, if null, unlimited */
  spacesCapacity?: Maybe<Scalars['Float']['output']>
  /** Allowed storage size, if null, unlimited */
  storageCapacity?: Maybe<Scalars['Float']['output']>
  /** Number of translation locales allowed, if null, unlimited */
  translationLocaleCapacity?: Maybe<Scalars['Float']['output']>
}

export type NetworkUsages = {
  /** @deprecated Deprecated, use usages.storageCapacity instead */
  fileStorageUsage?: Maybe<Scalars['Float']['output']>
  /** @deprecated Deprecated, use usages.storageCapacity instead */
  imageStorageUsage?: Maybe<Scalars['Float']['output']>
  usages: NetworkCurrentUsages
}

export enum NetworkVisibility {
  private = 'private',
  public = 'public',
}

export type NewMessage = {
  /** The ID of the chat the this message was sent to */
  chatId: Scalars['String']['output']
  /** The message object which was created and persisted as a result of the mutation */
  message: Message
  /** The page in which this message was inserted into, which is required when addressing a message. */
  pageId: Scalars['String']['output']
}

export type NewTheme = {
  colorTokens?: Maybe<ThemeColorTokens>
  colors?: Maybe<ThemeColors>
  id: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  typography?: Maybe<Array<ThemeToken>>
}

export type Notification = {
  /** This field represents the member that triggered the event. However, for events such as 'post updated', 'post deleted', 'comment updated', 'comment deleted', or 'join request status updated', the actor field may be set to null. This is a privacy measure designed to prevent the exposure of potentially sensitive identities, such as moderators, who may be responsible for these actions. */
  actor?: Maybe<Payload>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  meta?: Maybe<NotificationMeta>
  object?: Maybe<Payload>
  read: Scalars['Boolean']['output']
  space?: Maybe<Space>
  summary?: Maybe<Scalars['String']['output']>
  target?: Maybe<Payload>
  verb: NotificationVerb
}

export type NotificationEdge = {
  cursor: Scalars['String']['output']
  node: Notification
}

export type NotificationMeta = {
  body?: Maybe<Scalars['String']['output']>
  fullTitle: Scalars['String']['output']
  reason: NotificationReason
  relativeUrl: Scalars['String']['output']
  textBody?: Maybe<Scalars['String']['output']>
  textFullTitle: Scalars['String']['output']
  textTitle: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type NotificationNetworkSettings = {
  emailDigestEnabled: Scalars['Boolean']['output']
  emailDigestLayoutId: Scalars['String']['output']
  emailDigestRecentPostsFilter: EmailDigestRecentPostsFilter
  emailEnabled: Scalars['Boolean']['output']
  emailFrom?: Maybe<Scalars['String']['output']>
  emailNotificationEnabled: Scalars['Boolean']['output']
}

export enum NotificationReason {
  NETWORK_ADMIN = 'NETWORK_ADMIN',
  NETWORK_SUBSCRIPTION = 'NETWORK_SUBSCRIPTION',
  POST_AUTHOR = 'POST_AUTHOR',
  POST_SUBSCRIPTION = 'POST_SUBSCRIPTION',
  SPACE_ADMIN = 'SPACE_ADMIN',
  SPACE_SUBSCRIPTION = 'SPACE_SUBSCRIPTION',
}

export type NotificationSubscription = {
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  networkId: Scalars['String']['output']
  publisher?: Maybe<Publisher>
  publisherId: Scalars['String']['output']
  subscriberId: Scalars['String']['output']
}

export type NotificationSubscriptionEdge = {
  cursor: Scalars['String']['output']
  node: NotificationSubscription
}

export enum NotificationTrigger {
  MENTION = 'MENTION',
  MESSAGE = 'MESSAGE',
  REACTION = 'REACTION',
  SUBSCRIPTION = 'SUBSCRIPTION',
  SYSTEM = 'SYSTEM',
}

export enum NotificationVerb {
  COMMENT_CREATED = 'COMMENT_CREATED',
  COMMENT_DELETED = 'COMMENT_DELETED',
  COMMENT_UPDATED = 'COMMENT_UPDATED',
  JOIN_REQUEST_STATUS_UPDATED = 'JOIN_REQUEST_STATUS_UPDATED',
  MEMBER_MENTIONED = 'MEMBER_MENTIONED',
  MESSAGE_CREATED = 'MESSAGE_CREATED',
  POST_CREATED = 'POST_CREATED',
  POST_DELETED = 'POST_DELETED',
  POST_UPDATED = 'POST_UPDATED',
  REACTION_CREATED = 'REACTION_CREATED',
}

export type NotificationsCount = {
  new: Scalars['Float']['output']
}

export enum NumberTypeOptions {
  integer = 'integer',
  number = 'number',
}

export type OAuthCode = {
  code: Scalars['String']['output']
}

export type OAuthCodeInput = {
  clientId: Scalars['String']['input']
  redirectUri: Scalars['String']['input']
  scopes: Array<PrimaryScopes>
}

export type OAuthTokenInput = {
  code?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
}

export type OAuthTokens = {
  accessToken: Scalars['String']['output']
  expiresIn: Scalars['Float']['output']
  memberId: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

export type Oidc = {
  clientId: Scalars['String']['output']
  clientSecret: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  jwksUri?: Maybe<Scalars['String']['output']>
  jwtSecret?: Maybe<Scalars['String']['output']>
  networkId: Scalars['ID']['output']
  updatedAt: Scalars['DateTime']['output']
  validIssuers: Array<Scalars['String']['output']>
}

export type Page = {
  customResponse?: Maybe<PageCustomResponse>
  entity?: Maybe<PageEntity>
  seoDetail: PageSeo
  space: Space
}

export type PageCustomResponse = {
  body: Scalars['String']['output']
  headers: Array<PageCustomResponseHeader>
  httpCode: Scalars['Int']['output']
}

export type PageCustomResponseHeader = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type PageCustomResponseHeaderInput = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type PageDetailedCustomResponse = {
  body: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  createdById?: Maybe<Scalars['String']['output']>
  creatorType: CreatorType
  headers: Array<PageCustomResponseHeader>
  httpCode: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedById?: Maybe<Scalars['String']['output']>
}

export type PageDetailedCustomResponseEdge = {
  cursor: Scalars['String']['output']
  node: PageDetailedCustomResponse
}

export type PageEntity = Collection | Member | Post

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
}

export type PageSeo = {
  additionalMeta?: Maybe<Array<PageTag>>
  description?: Maybe<Scalars['String']['output']>
  jsonld?: Maybe<Scalars['String']['output']>
  thumbnail?: Maybe<Media>
  title: Scalars['String']['output']
}

export enum PageSeoTagType {
  LINK = 'LINK',
  META = 'META',
  TITLE = 'TITLE',
}

export type PageTag = {
  properties: Array<KeyValue>
  type: PageSeoTagType
}

export type PaginatedApp = {
  edges?: Maybe<Array<AppEdge>>
  nodes?: Maybe<Array<App>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedAppInstallation = {
  edges?: Maybe<Array<AppInstallationEdge>>
  nodes?: Maybe<Array<AppInstallation>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedDynamicBlock = {
  edges?: Maybe<Array<DynamicBlockEdge>>
  nodes?: Maybe<Array<DynamicBlock>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedEmailLog = {
  edges?: Maybe<Array<EmailLogEdge>>
  nodes?: Maybe<Array<EmailLog>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedExport = {
  edges?: Maybe<Array<ExportEdge>>
  nodes?: Maybe<Array<Export>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedMember = {
  edges?: Maybe<Array<MemberEdge>>
  nodes?: Maybe<Array<Member>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedMemberInvitation = {
  edges?: Maybe<Array<MemberInvitationEdge>>
  nodes?: Maybe<Array<MemberInvitation>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedModeration = {
  edges?: Maybe<Array<ModerationItemEdge>>
  nodes?: Maybe<Array<ModerationItem>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedModerationItemReporter = {
  edges?: Maybe<Array<ModerationItemReporterEdge>>
  nodes?: Maybe<Array<ModerationItemReporter>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedNetwork = {
  edges?: Maybe<Array<PluralNetworkEdge>>
  nodes?: Maybe<Array<PluralNetwork>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedNotification = {
  edges?: Maybe<Array<NotificationEdge>>
  nodes?: Maybe<Array<Notification>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedNotificationSubscriptions = {
  edges?: Maybe<Array<NotificationSubscriptionEdge>>
  nodes?: Maybe<Array<NotificationSubscription>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedPageCustomResponse = {
  edges?: Maybe<Array<PageDetailedCustomResponseEdge>>
  nodes?: Maybe<Array<PageDetailedCustomResponse>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedPluralMember = {
  edges?: Maybe<Array<PluralMemberEdge>>
  nodes?: Maybe<Array<PluralMember>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedPost = {
  edges?: Maybe<Array<PostEdge>>
  nodes?: Maybe<Array<Post>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedPostReactionParticipant = {
  edges?: Maybe<Array<PostReactionParticipantEdge>>
  nodes?: Maybe<Array<PostReactionParticipant>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedPostType = {
  edges?: Maybe<Array<PostTypeEdge>>
  nodes?: Maybe<Array<PostType>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedSitemap = {
  edges?: Maybe<Array<SitemapEdge>>
  nodes?: Maybe<Array<Sitemap>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedSpace = {
  edges?: Maybe<Array<SpaceEdge>>
  nodes?: Maybe<Array<Space>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedSpaceJoinRequest = {
  edges?: Maybe<Array<SpaceJoinRequestEdge>>
  nodes?: Maybe<Array<SpaceJoinRequest>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedSpaceMember = {
  edges?: Maybe<Array<SpaceMemberEdge>>
  nodes?: Maybe<Array<SpaceMember>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedSpacePostType = {
  edges?: Maybe<Array<SpacePostTypeEdge>>
  nodes?: Maybe<Array<SpacePostType>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedTag = {
  edges?: Maybe<Array<TagEdge>>
  nodes?: Maybe<Array<Tag>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PaginatedTemplate = {
  edges?: Maybe<Array<TemplateEdge>>
  nodes?: Maybe<Array<Template>>
  pageInfo: PageInfo
  totalCount?: Maybe<Scalars['Int']['output']>
}

export type PartUrl = {
  /** Which part of the file this URL is for */
  partNumber: Scalars['Int']['output']
  /** The file to be uploaded needs to be sliced to be exactly this size for the signature to be valid */
  partSize: Scalars['Int']['output']
  /** The signed URL for the part */
  signedUrl: Scalars['String']['output']
  /** The file to be uploaded needs to be sliced with this byte as the starting point */
  startingByte: Scalars['Int']['output']
}

export type PasswordComplexity = {
  complex: Scalars['Boolean']['output']
}

export type PathPermissions = {
  isAuthorized: IsAuthorized
  path: Scalars['String']['output']
}

export type Payload = {
  id: Scalars['ID']['output']
  media?: Maybe<Media>
  member?: Maybe<Member>
  name?: Maybe<Scalars['String']['output']>
  post?: Maybe<Post>
  space?: Maybe<Space>
  summary?: Maybe<Scalars['String']['output']>
  type: PayloadType
}

export enum PayloadType {
  JOIN_REQUEST_STATUS = 'JOIN_REQUEST_STATUS',
  MEMBER = 'MEMBER',
  NETWORK = 'NETWORK',
  POST = 'POST',
  REACTION = 'REACTION',
  SPACE = 'SPACE',
}

export type Permission = {
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  scopes: Array<Scalars['String']['output']>
}

export enum PermissionContext {
  MEMBER = 'MEMBER',
  NETWORK = 'NETWORK',
  POST = 'POST',
  SPACE = 'SPACE',
}

export type Permissions = {
  actions: Array<ActionPermissions>
  contextAwareActions: Array<ContextPermissions>
}

export type PermissionsContextInput = {
  context: PermissionContext
  ids: Array<Scalars['String']['input']>
}

export enum PinnedInto {
  member = 'member',
  network = 'network',
  post = 'post',
  space = 'space',
}

export type PluralMember = {
  activeSession?: Maybe<MemberSession>
  /** @deprecated Has been replaced by locale field */
  attributes: MemberAttributes
  authMemberProps?: Maybe<MemberAuthMemberProps>
  badges?: Maybe<Array<MemberBadge>>
  banner?: Maybe<Media>
  bannerId?: Maybe<Scalars['ID']['output']>
  blockedMemberIds?: Maybe<Array<Scalars['String']['output']>>
  blockedMembers?: Maybe<Array<Member>>
  createdAt: Scalars['DateTime']['output']
  /** @deprecated Has been replaced with name */
  displayName?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  emailStatus?: Maybe<MemberEmailStatus>
  externalId?: Maybe<Scalars['ID']['output']>
  externalUrl?: Maybe<Scalars['String']['output']>
  extraProperties?: Maybe<Array<ExtraProperty>>
  fields?: Maybe<Array<CustomField>>
  flagged: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  lastSeen?: Maybe<Scalars['DateTime']['output']>
  lastSeenAt?: Maybe<Scalars['DateTime']['output']>
  locale: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  network?: Maybe<Network>
  networkId: Scalars['ID']['output']
  newEmail?: Maybe<Scalars['String']['output']>
  /** @deprecated Use the teammate field instead */
  overrideTeammate?: Maybe<Scalars['Boolean']['output']>
  profilePicture?: Maybe<Media>
  profilePictureId?: Maybe<Scalars['ID']['output']>
  relativeUrl?: Maybe<Scalars['String']['output']>
  role?: Maybe<Role>
  roleId: Scalars['ID']['output']
  score?: Maybe<Scalars['Int']['output']>
  sessions?: Maybe<Array<MemberSession>>
  settings?: Maybe<MemberSettings>
  shortcuts?: Maybe<Array<Shortcut>>
  spaces?: Maybe<PaginatedSpace>
  staffReasons?: Maybe<Array<StaffReason>>
  status: MemberStatus
  subscribersCount?: Maybe<Scalars['Int']['output']>
  tagline?: Maybe<Scalars['String']['output']>
  teammate: Scalars['Boolean']['output']
  timeZone?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
  username: Scalars['String']['output']
  verifiedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PluralMemberExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>
}

export type PluralMemberSpacesArgs = {
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
}

export type PluralMemberEdge = {
  cursor: Scalars['String']['output']
  node: PluralMember
}

export type PluralNetwork = {
  activeSso?: Maybe<ActiveSso>
  activeTheme?: Maybe<NewTheme>
  /** @deprecated Has been moved to usageLimits */
  additionalSeatsCapacity?: Maybe<Scalars['Int']['output']>
  aliases: Array<Scalars['String']['output']>
  authMemberProps?: Maybe<NetworkAuthMemberProps>
  availableLocales: Array<Scalars['String']['output']>
  badges?: Maybe<Array<Badge>>
  /** @deprecated It will be stored on Stripe. */
  billingEmail?: Maybe<Scalars['String']['output']>
  /** Has been replaced by activeTheme, but some may still use it */
  brandColor?: Maybe<Scalars['String']['output']>
  companyName?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<Member>
  createdById: Scalars['ID']['output']
  customCodes?: Maybe<Array<CustomCode>>
  /** @deprecated Has been moved to usageLimits */
  customMemberCapacity?: Maybe<Scalars['Int']['output']>
  customSeoDetail?: Maybe<CustomSeoDetail>
  defaultSpaces?: Maybe<Array<Space>>
  description?: Maybe<Scalars['String']['output']>
  domain: Scalars['String']['output']
  domainSubfolder?: Maybe<Scalars['String']['output']>
  extraProperties?: Maybe<Array<ExtraProperty>>
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  /** @deprecated Has been replaced by navigation slates */
  footer?: Maybe<Footer>
  globalFavicon?: Maybe<Media>
  globalLogo?: Maybe<Media>
  hideDefaultAuthenticationForm: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  images?: Maybe<NetworkImages>
  incidentEmails?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated Has been moved to extraProperties */
  industry?: Maybe<NetworkIndustryType>
  /** @deprecated This field is deprecated. */
  landingPages?: Maybe<NetworkSettings>
  limits?: Maybe<NetworkLimits>
  limitsUpdatedAt?: Maybe<Scalars['DateTime']['output']>
  locale: Scalars['String']['output']
  logo?: Maybe<Media>
  logoId?: Maybe<Scalars['ID']['output']>
  /** @deprecated This resolver will be replaced by limits */
  mediaLimits?: Maybe<MediaLimits>
  /** @deprecated This resolver will be replaced by settings */
  mediaSettings?: Maybe<MediaNetworkSettings>
  /**
   * Calculated member capacity
   * @deprecated Has been moved to usageLimits
   */
  memberCapacity?: Maybe<Scalars['Int']['output']>
  /** @deprecated Has been moved to usageLimits */
  memberCapacityDeclared?: Maybe<Scalars['Int']['output']>
  memberFields?: Maybe<CustomFieldsSchema>
  members?: Maybe<PaginatedMember>
  membersCount?: Maybe<Scalars['Int']['output']>
  membership: NetworkMembership
  name: Scalars['String']['output']
  navigationSlates: NavigationSlates
  newDomain?: Maybe<Scalars['String']['output']>
  /** @deprecated This resolver will be replaced by settings */
  notificationSettings?: Maybe<NotificationNetworkSettings>
  organizationId?: Maybe<Scalars['String']['output']>
  overUsedAt?: Maybe<Scalars['DateTime']['output']>
  owner?: Maybe<Member>
  ownerId: Scalars['ID']['output']
  passwordComplexity: NetworkPasswordComplexity
  planName: Scalars['String']['output']
  postTypes?: Maybe<Array<PostType>>
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>
  referralLink?: Maybe<Scalars['String']['output']>
  referralProgramEnabled: Scalars['Boolean']['output']
  /** @deprecated Has been moved to extraProperties */
  releaseChannel?: Maybe<NetworkReleaseChannelType>
  roles?: Maybe<Array<Role>>
  searchSettings?: Maybe<SearchNetworkSettings>
  /** @deprecated Has been moved to usageLimits */
  seatCapacityDeclared?: Maybe<Scalars['Int']['output']>
  /**
   * Calculated seats capacity
   * @deprecated Has been moved to usageLimits
   */
  seatsCapacity?: Maybe<Scalars['Int']['output']>
  settings?: Maybe<Settings>
  shortcuts?: Maybe<Array<Shortcut>>
  spaces?: Maybe<PaginatedSpace>
  status: NetworkStatus
  statusLocked: Scalars['Boolean']['output']
  statusReason?: Maybe<StatusReason>
  systemSpaces?: Maybe<Array<Space>>
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>
  /** Has been replaced by activeTheme, but some may still use "themes" */
  themes?: Maybe<Themes>
  /** @deprecated Has been replaced by navigation slates */
  topNavigation?: Maybe<TopNavigation>
  tribeBranding: Scalars['Boolean']['output']
  usages?: Maybe<NetworkUsages>
  visibility: NetworkVisibility
  whoCanInvite?: Maybe<Array<Role>>
  whoCanInviteIds: Array<Scalars['ID']['output']>
  willUnpublishAt?: Maybe<Scalars['DateTime']['output']>
}

export type PluralNetworkCustomCodesArgs = {
  anonymize: Scalars['Boolean']['input']
}

export type PluralNetworkExtraPropertiesArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>
}

export type PluralNetworkMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<Array<MemberStatusInput>>
}

export type PluralNetworkPostTypesArgs = {
  context?: InputMaybe<PostTypeContext>
}

export type PluralNetworkSpacesArgs = {
  limit: Scalars['Int']['input']
}

export type PluralNetworkEdge = {
  cursor: Scalars['String']['output']
  node: PluralNetwork
}

export type Poll = {
  closesAt?: Maybe<Scalars['DateTime']['output']>
  createdAt: Scalars['String']['output']
  createdById: Scalars['String']['output']
  deletedAt?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  isDraft: Scalars['Boolean']['output']
  /** The maximum number of options a participant can select. Defaults to 1. */
  maxSelections: Scalars['Int']['output']
  networkId: Scalars['String']['output']
  opensAt: Scalars['DateTime']['output']
  options: Array<PollOption>
  parentEntityId?: Maybe<Scalars['String']['output']>
  parentEntityType: PollEntityType
  status: PollStatus
  title: Scalars['String']['output']
  /** The number of people who have participated in the poll. */
  totalParticipants?: Maybe<Scalars['Int']['output']>
  /** The number of votes cast for this poll. In case of multi-choice polls, it can be more than total participants. */
  totalVoteCasts?: Maybe<Scalars['Int']['output']>
  updatedAt: Scalars['String']['output']
  /** Vote cast by the current user */
  usersVote?: Maybe<Vote>
  /** JWT token that allows voting on this poll. Valid for 1 hour from generation. */
  voteToken?: Maybe<Scalars['String']['output']>
}

/** The type of entity a poll belongs to */
export enum PollEntityType {
  GroupChat = 'GroupChat',
  Network = 'Network',
  Post = 'Post',
  Space = 'Space',
}

export type PollOption = {
  id: Scalars['Int']['output']
  label: Scalars['String']['output']
  result?: Maybe<PollOptionResult>
}

export type PollOptionInput = {
  label: Scalars['String']['input']
}

export type PollOptionResult = {
  /** Ratio of the participants who voted for this option. The value ranges from 0.00 to 1.00 */
  voteCastShare: Scalars['Float']['output']
  /** Number participants who voted for this option */
  voteCount: Scalars['Int']['output']
}

/** In case the parent entity of the poll is not yet created (which can happen when writing up posts), client is required to offer a hint as to where that future parent will exist. In case of posts, the parent hint should point to the space in which the post will live. The poll attachment will be enforced once again when the parent entity is created through the input scopes. */
export type PollParentHintInput = {
  entityId: Scalars['String']['input']
  entityType: PollEntityType
}

/** The status of a poll */
export enum PollStatus {
  Active = 'Active',
  Closed = 'Closed',
  Scheduled = 'Scheduled',
}

export type Post = {
  /** @deprecated Has been replaced by allowedReactions. */
  allowedEmojis?: Maybe<Array<Scalars['String']['output']>>
  allowedReactions?: Maybe<Array<Scalars['String']['output']>>
  attachmentIds: Array<Scalars['ID']['output']>
  attachments?: Maybe<Array<File>>
  authMemberProps?: Maybe<PostAuthMemberProps>
  contentSummary?: Maybe<PostContentSummary>
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<SpaceMember>
  createdById: Scalars['ID']['output']
  customSeoDetail?: Maybe<CustomSeoDetail>
  description?: Maybe<Scalars['String']['output']>
  embedIds: Array<Scalars['String']['output']>
  embeds?: Maybe<Array<Embed>>
  externalId?: Maybe<Scalars['ID']['output']>
  externalUrl?: Maybe<Scalars['String']['output']>
  fields?: Maybe<Array<CustomField>>
  /** @deprecated Use "subscribersCount" instead */
  followersCount?: Maybe<Scalars['Int']['output']>
  /** @deprecated Has been replaced by allowedReactions. */
  forbiddenEmojis?: Maybe<Array<Scalars['String']['output']>>
  forbiddenReactions?: Maybe<Array<Scalars['String']['output']>>
  hasMoreContent: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  imageIds: Array<Scalars['ID']['output']>
  images?: Maybe<Array<Media>>
  isAnonymous: Scalars['Boolean']['output']
  isHidden?: Maybe<Scalars['Boolean']['output']>
  language?: Maybe<Scalars['String']['output']>
  lastActivityAt?: Maybe<Scalars['DateTime']['output']>
  lastActivityDetail?: Maybe<PostLastActivityDetail>
  /** Whether the post is locked */
  locked: Scalars['Boolean']['output']
  /** @deprecated This field is going to be deprecated in favor of "fields" */
  mappingFields?: Maybe<Array<PostMappingField>>
  mentionedMembers: Array<Scalars['String']['output']>
  mentions?: Maybe<Array<Member>>
  /** @deprecated There are no negative reactions anymore. */
  negativeReactions?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated There are no positive reactions anymore. */
  negativeReactionsCount?: Maybe<Scalars['Int']['output']>
  networkId: Scalars['ID']['output']
  owner?: Maybe<SpaceMember>
  ownerId: Scalars['ID']['output']
  pinnedInto: Array<PinnedInto>
  pinnedReplies?: Maybe<Array<Post>>
  pollIds: Array<Scalars['ID']['output']>
  polls?: Maybe<Array<Poll>>
  /** @deprecated There are no positive reactions anymore. */
  positiveReactions?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated There are no positive reactions anymore. */
  positiveReactionsCount?: Maybe<Scalars['Int']['output']>
  postType?: Maybe<PostType>
  postTypeId: Scalars['ID']['output']
  /** Has been replaced by allowedReactions, but some may still use it */
  primaryReactionType?: Maybe<ReactionType>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  reactions?: Maybe<Array<PostReactionDetail>>
  reactionsCount: Scalars['Int']['output']
  relativeUrl?: Maybe<Scalars['String']['output']>
  repliedTo?: Maybe<Post>
  repliedToId?: Maybe<Scalars['ID']['output']>
  repliedToIds?: Maybe<Array<Scalars['String']['output']>>
  repliedTos?: Maybe<Array<Post>>
  replies?: Maybe<PaginatedPost>
  repliesCount: Scalars['Int']['output']
  scheduledFor?: Maybe<Scalars['DateTime']['output']>
  seoDetail: PostSeoDetail
  shortContent?: Maybe<Scalars['String']['output']>
  shortcuts?: Maybe<Array<Shortcut>>
  singleChoiceReactions?: Maybe<Array<Scalars['String']['output']>>
  slug?: Maybe<Scalars['String']['output']>
  space?: Maybe<Space>
  spaceId: Scalars['ID']['output']
  status: PostStatus
  subscribersCount?: Maybe<Scalars['Int']['output']>
  tagIds?: Maybe<Array<Scalars['String']['output']>>
  tags?: Maybe<Array<Tag>>
  textContent?: Maybe<Scalars['String']['output']>
  thumbnail?: Maybe<Media>
  thumbnailId?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  topRepliers: Array<PostTopReplier>
  /** @deprecated topicIds is replaced by tagIds. */
  topicIds?: Maybe<Array<Scalars['String']['output']>>
  totalRepliesCount: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type PostContentSummaryArgs = {
  format?: ShortContentFormat
  length?: Scalars['Int']['input']
}

export type PostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  excludePins?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  orderByString?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type PostShortContentArgs = {
  format?: ShortContentFormat
  length?: InputMaybe<Scalars['Int']['input']>
}

export type PostAuthMemberProps = {
  availableReplyTypes?: Maybe<Array<PostType>>
  canReact?: Maybe<Scalars['Boolean']['output']>
  context: PermissionContext
  /** @deprecated Use "subscribed" instead */
  memberPostNotificationSettingsEnabled?: Maybe<Scalars['Boolean']['output']>
  permissions?: Maybe<Array<ActionPermissions>>
  scopes?: Maybe<Array<Scalars['String']['output']>>
  subscribed?: Maybe<Scalars['Boolean']['output']>
}

export type PostContentSummary = {
  hasMoreContent: Scalars['Boolean']['output']
  summary: Scalars['String']['output']
}

export type PostEdge = {
  cursor: Scalars['String']['output']
  node: Post
}

export enum PostFieldsEnum {
  boolean1 = 'boolean1',
  boolean2 = 'boolean2',
  boolean3 = 'boolean3',
  boolean4 = 'boolean4',
  boolean5 = 'boolean5',
  date1 = 'date1',
  date2 = 'date2',
  date3 = 'date3',
  date4 = 'date4',
  date5 = 'date5',
  html1 = 'html1',
  html2 = 'html2',
  html3 = 'html3',
  html4 = 'html4',
  html5 = 'html5',
  html6 = 'html6',
  html7 = 'html7',
  html8 = 'html8',
  html9 = 'html9',
  html10 = 'html10',
  image1 = 'image1',
  image2 = 'image2',
  image3 = 'image3',
  image4 = 'image4',
  image5 = 'image5',
  number1 = 'number1',
  number2 = 'number2',
  number3 = 'number3',
  number4 = 'number4',
  number5 = 'number5',
  numberArray1 = 'numberArray1',
  numberArray2 = 'numberArray2',
  numberArray3 = 'numberArray3',
  numberArray4 = 'numberArray4',
  numberArray5 = 'numberArray5',
  text1 = 'text1',
  text2 = 'text2',
  text3 = 'text3',
  text4 = 'text4',
  text5 = 'text5',
  text6 = 'text6',
  text7 = 'text7',
  text8 = 'text8',
  text9 = 'text9',
  text10 = 'text10',
  textArray1 = 'textArray1',
  textArray2 = 'textArray2',
  textArray3 = 'textArray3',
  textArray4 = 'textArray4',
  textArray5 = 'textArray5',
}

export type PostLastActivityDetail = {
  entity?: Maybe<PostLastActivityEntity>
  entityId: Scalars['ID']['output']
  entityType: PostLastActivityEntityType
}

export type PostLastActivityEntity = Post | PostReactionParticipant

export enum PostLastActivityEntityType {
  Reaction = 'Reaction',
  Reply = 'Reply',
}

export enum PostListFilterByEnum {
  boolean1 = 'boolean1',
  boolean2 = 'boolean2',
  boolean3 = 'boolean3',
  boolean4 = 'boolean4',
  boolean5 = 'boolean5',
  createdAt = 'createdAt',
  date1 = 'date1',
  date2 = 'date2',
  date3 = 'date3',
  date4 = 'date4',
  date5 = 'date5',
  number1 = 'number1',
  number2 = 'number2',
  number3 = 'number3',
  number4 = 'number4',
  number5 = 'number5',
  publishedAt = 'publishedAt',
  status = 'status',
  updatedAt = 'updatedAt',
}

export type PostListFilterByInput = {
  key?: InputMaybe<PostListFilterByEnum>
  keyString?: InputMaybe<Scalars['String']['input']>
  operator?: InputMaybe<PostListFilterByOperator>
  value: Scalars['String']['input']
}

export enum PostListFilterByOperator {
  contains = 'contains',
  endsWith = 'endsWith',
  equals = 'equals',
  gt = 'gt',
  gte = 'gte',
  hasValue = 'hasValue',
  in = 'in',
  lt = 'lt',
  lte = 'lte',
  nin = 'nin',
  not = 'not',
  startsWith = 'startsWith',
}

export enum PostListOrderByEnum {
  boolean1 = 'boolean1',
  boolean2 = 'boolean2',
  boolean3 = 'boolean3',
  boolean4 = 'boolean4',
  boolean5 = 'boolean5',
  createdAt = 'createdAt',
  date1 = 'date1',
  date2 = 'date2',
  date3 = 'date3',
  date4 = 'date4',
  date5 = 'date5',
  lastActivityAt = 'lastActivityAt',
  number1 = 'number1',
  number2 = 'number2',
  number3 = 'number3',
  number4 = 'number4',
  number5 = 'number5',
  publishedAt = 'publishedAt',
  reactionsCount = 'reactionsCount',
  repliesCount = 'repliesCount',
  text1 = 'text1',
  text2 = 'text2',
  text3 = 'text3',
  text4 = 'text4',
  text5 = 'text5',
  totalRepliesCount = 'totalRepliesCount',
  updatedAt = 'updatedAt',
}

export type PostMappingField = {
  key: Scalars['String']['output']
  type: PostMappingTypeEnum
  value: Scalars['String']['output']
}

export type PostMappingFieldInput = {
  key: Scalars['String']['input']
  type: PostMappingTypeEnum
  value: Scalars['String']['input']
}

export enum PostMappingTypeEnum {
  boolean = 'boolean',
  date = 'date',
  html = 'html',
  image = 'image',
  number = 'number',
  numberArray = 'numberArray',
  text = 'text',
  textArray = 'textArray',
}

export type PostReactionDetail = {
  count: Scalars['Int']['output']
  participants?: Maybe<PaginatedPostReactionParticipant>
  reacted: Scalars['Boolean']['output']
  reaction: Scalars['String']['output']
}

export type PostReactionDetailParticipantsArgs = {
  limit: Scalars['Int']['input']
}

export type PostReactionParticipant = {
  participant?: Maybe<Member>
  reaction?: Maybe<PostReactionDetail>
}

export type PostReactionParticipantEdge = {
  cursor: Scalars['String']['output']
  node: PostReactionParticipant
}

export type PostSeoDetail = {
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export enum PostStatus {
  ARCHIVED = 'ARCHIVED',
  BLOCKED = 'BLOCKED',
  DELETED = 'DELETED',
  DRAFT = 'DRAFT',
  /** @deprecated Use DRAFT instead */
  DRAFTED = 'DRAFTED',
  PUBLISHED = 'PUBLISHED',
}

export type PostTopReplier = {
  member?: Maybe<Member>
  repliesCount: Scalars['Int']['output']
}

export type PostType = {
  actions?: Maybe<Array<PostTypeAction>>
  /** @deprecated Use allowedReactions instead. */
  allowedEmojis?: Maybe<Array<Scalars['String']['output']>>
  allowedReactions?: Maybe<Array<Scalars['String']['output']>>
  archived: Scalars['Boolean']['output']
  authMemberProps?: Maybe<PostTypeAuthMemberProps>
  context: PostTypeContext
  createdAt: Scalars['DateTime']['output']
  customReactions?: Maybe<Array<CustomReaction>>
  description?: Maybe<Scalars['String']['output']>
  excludedNativeShortcuts?: Maybe<Array<Scalars['String']['output']>>
  /** @deprecated Use forbiddenReactions instead. */
  forbiddenEmojis?: Maybe<Array<Scalars['String']['output']>>
  forbiddenReactions?: Maybe<Array<Scalars['String']['output']>>
  icon?: Maybe<Media>
  iconId?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  languageTemplate?: Maybe<Scalars['String']['output']>
  layout: Scalars['String']['output']
  /** @deprecated This field is going to be deprecated in favor of "postFields" */
  mappings?: Maybe<Array<PostTypeMapping>>
  name: Scalars['String']['output']
  nativeFieldsTemplates?: Maybe<NativeFieldsTemplates>
  /** @deprecated There are no negative reactions anymore. */
  negativeReactions?: Maybe<Array<Scalars['String']['output']>>
  pluralName: Scalars['String']['output']
  /** @deprecated There are no positive reactions anymore. */
  positiveReactions?: Maybe<Array<Scalars['String']['output']>>
  postFields?: Maybe<CustomFieldsSchema>
  /** Has been replaced by allowedReactions, but some may still use it */
  primaryReactionType?: Maybe<ReactionType>
  recommendationsSettings?: Maybe<PostTypeRecommendationSettings>
  shortContentTemplate?: Maybe<Scalars['String']['output']>
  singleChoiceReactions?: Maybe<Array<Scalars['String']['output']>>
  slate: Slate
  slug: Scalars['String']['output']
  titleTemplate?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  validReplyTypes?: Maybe<Array<PostType>>
}

export type PostTypeAction = {
  props?: Maybe<Scalars['String']['output']>
  shortcutKey: Scalars['String']['output']
}

export type PostTypeAuthMemberProps = {
  availableSpaces?: Maybe<Array<Space>>
  context: PermissionContext
  permissions?: Maybe<Array<ActionPermissions>>
  scopes?: Maybe<Array<Scalars['String']['output']>>
}

export enum PostTypeContext {
  post = 'post',
  reply = 'reply',
}

export type PostTypeEdge = {
  cursor: Scalars['String']['output']
  node: PostType
}

export type PostTypeMapping = {
  default?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  field?: Maybe<PostFieldsEnum>
  isMainContent?: Maybe<Scalars['Boolean']['output']>
  isSearchable?: Maybe<Scalars['Boolean']['output']>
  key: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  title?: Maybe<Scalars['String']['output']>
  type: PostMappingTypeEnum
}

export type PostTypeRecommendationSettings = {
  fields: Array<Scalars['String']['output']>
  sourceSelf?: Maybe<Scalars['Boolean']['output']>
  sourceSpaces?: Maybe<Array<Scalars['String']['output']>>
}

export type PostTypeRecommendationSettingsInput = {
  fields: Array<Scalars['String']['input']>
  sourceSelf?: InputMaybe<Scalars['Boolean']['input']>
  sourceSpaces?: InputMaybe<Array<Scalars['String']['input']>>
}

export enum PrimaryScopes {
  CreateContent = 'CreateContent',
  DeleteAuthMember = 'DeleteAuthMember',
  DeleteContent = 'DeleteContent',
  DeleteMember = 'DeleteMember',
  DeleteNetwork = 'DeleteNetwork',
  FindAuthMember = 'FindAuthMember',
  FindContent = 'FindContent',
  FindNetwork = 'FindNetwork',
  FullAccess = 'FullAccess',
  InviteMember = 'InviteMember',
  JoinNetwork = 'JoinNetwork',
  UpdateAuthMember = 'UpdateAuthMember',
  UpdateBilling = 'UpdateBilling',
  UpdateContent = 'UpdateContent',
  UpdateMember = 'UpdateMember',
  UpdateModeration = 'UpdateModeration',
  UpdateNetwork = 'UpdateNetwork',
  UpdateNetworkTemplate = 'UpdateNetworkTemplate',
  UpdateReport = 'UpdateReport',
  ViewAuthMember = 'ViewAuthMember',
  ViewContent = 'ViewContent',
  ViewMember = 'ViewMember',
  ViewNetwork = 'ViewNetwork',
  ViewReport = 'ViewReport',
}

/** Input for creating a private message. */
export type PrivateMessageInput = {
  memberIds?: InputMaybe<Array<Scalars['String']['input']>>
}

export enum PrivateMessagingIncomingContact {
  Anyone = 'Anyone',
  Staff = 'Staff',
}

export enum PrivateMessagingOutgoingContact {
  Anyone = 'Anyone',
  Staff = 'Staff',
}

export type PrivateMessagingSettings = {
  maxGroupSize?: Maybe<Scalars['Int']['output']>
  /** @deprecated Will be removed with the release of the new inbox */
  membersCanTurnOffPrivateMessaging?: Maybe<Scalars['Boolean']['output']>
  /** @deprecated Use whoCanMembersContact instead */
  membersCanUsePrivateMessaging?: Maybe<Scalars['Boolean']['output']>
  privateMessagingEnabled: Scalars['Boolean']['output']
  whoCanCreateGroups?: Maybe<GroupChatCreationPermission>
  whoCanMembersContact?: Maybe<PrivateMessagingOutgoingContact>
}

export type PrivateMessagingSettingsInput = {
  membersCanTurnOffPrivateMessaging?: InputMaybe<Scalars['Boolean']['input']>
  membersCanUsePrivateMessaging?: InputMaybe<Scalars['Boolean']['input']>
  privateMessagingEnabled: Scalars['Boolean']['input']
  whoCanCreateGroups?: InputMaybe<GroupChatCreationPermission>
  whoCanMembersContact?: InputMaybe<PrivateMessagingOutgoingContact>
}

export type PromoteChatAdminsInput = {
  /** List of member ids to promote to admin. These members must already be a part of the group chat. */
  memberIds: Array<Scalars['String']['input']>
}

export type PromotedAdminsMetadata = {
  promotedParticipants: Array<ChatParticipant>
  type: ChatLogType
}

export type Publisher = {
  id: Scalars['ID']['output']
  member?: Maybe<Member>
  networkId: Scalars['ID']['output']
  notifyImplicitSubscriptions?: Maybe<Scalars['Boolean']['output']>
  post?: Maybe<Post>
  space?: Maybe<Space>
  type: PublisherType
}

export type PublisherEdge = {
  cursor: Scalars['String']['output']
  node: Publisher
}

export enum PublisherType {
  Custom = 'Custom',
  Member = 'Member',
  Post = 'Post',
  Space = 'Space',
}

export type PurgeMediasInput = {
  mediaIds: Array<Scalars['String']['input']>
}

export type Query = {
  accessGroup: AccessGroup
  accessGroups: Array<AccessGroup>
  activityLogs: Array<ReportRecord>
  analytics: Array<AnalyticsResponse>
  apiRateLimitStats: Array<ApiRateLimitStat>
  apiUsages: Array<DailyApiUsage>
  app: App
  apps: PaginatedApp
  authMember: Member
  authMemberAppInstallation: AppInstallation
  authMemberAppInstallations: PaginatedAppInstallation
  availableDynamicBlocks: Array<DynamicBlock>
  billingProducts: BillingProducts
  /** Get chat by id */
  chat: Chat
  /**
   * Resolves a space slug to the corresponding chat id
   * @deprecated This query is only to enable redirections during deprecation phase. The query will be removed when the deprecation period is over.
   */
  chatIdFromSlug: ChatIdFromSlug
  /** Get participants for a chat. This will return participants of the chat up to a limit of 20, sorted by join date. To fetch more, use the participantByCursor query. */
  chatParticipants: ChatParticipantList
  /** Get all participants for a chat */
  chatParticipantsByCursor: ChatParticipantList
  /** Get participants by ids */
  chatParticipantsByIds: Array<ChatParticipant>
  /** Get chats before or after a given message or timestamp. `messageId` takes precedence and if provided, `timestamp` will be ignored. */
  chats: ChatList
  /** Get chats using a query cursor. You may adjust the `limit` per each query, but the `direction` cannot be modified and is encoded in the cursor. */
  chatsByCursor: ChatList
  /** @deprecated This query will be replaced by domainAvailability */
  checkDomainAvailability: DomainAvailability
  /** @deprecated This query will be replaced by emailAvailability */
  checkEmailAvailability: EmailAvailability
  /** @deprecated This query will be replaced by invitationLinkValidity */
  checkInvitationLinkValidity: MemberInvitationLink
  /** @deprecated This query will be replaced by memberInvitationValidity */
  checkMemberInvitationValidity: MemberInvitation
  /** Check if current user can send message to the specified members. */
  checkMembersContactability: MembersContactabilityStatus
  /** @deprecated This query will be replaced by newDomainStatus */
  checkNewDomainStatus: DomainTransferStatus
  /** @deprecated This query will be replaced by passwordComplexity */
  checkPasswordComplexity: PasswordComplexity
  /** @deprecated This query will be replaced by usernameAvailability */
  checkUsernameAvailability: UsernameAvailability
  collection: Collection
  collections: Array<Collection>
  domainAvailability: DomainAvailability
  /** Get draft polls by IDs. Useful for fetching poll details when composing a post that is not persisted just yet. Only author of the poll can access the draft polls. */
  draftPollsForEntityType: Array<Poll>
  draftPosts: PaginatedPost
  draftPostsCount: Scalars['Float']['output']
  dynamicBlock: DynamicBlock
  dynamicBlockByKey: DynamicBlock
  dynamicBlocks: PaginatedDynamicBlock
  emailAvailability: EmailAvailability
  emailLogs: PaginatedEmailLog
  embed: Embed
  exploreSpaces: PaginatedSpace
  exportMemberRequest: Export
  exportMemberRequests: PaginatedExport
  externalSearch: Array<ExternalSearchResult>
  extraProperties: Array<ExtraProperty>
  feed: PaginatedPost
  /** Filter members with pagination. The difference from search is that you don't provide a query. Therefore there is no relevance score and the result is instead ordered using the orderBy input or defaults to join date. */
  filterMembers: PaginatedMember
  /** Filter posts with pagination. The difference from search is that you don't provide a query. Therefore there is no relevance score and the result is instead ordered using the orderBy input or defaults to publish date. */
  filterPosts: PaginatedPost
  /** Filter spaces with pagination. The difference from search is that you don't provide a query. Therefore there is no relevance score and the result is instead ordered using the orderBy input or defaults to creation date. */
  filterSpaces: PaginatedSpace
  /** Find an existing chat between current user and the specified member */
  findChatWithMember: Chat
  /** @deprecated This query will be replaced by app */
  getAppById: App
  /** @deprecated This query will be replaced by app */
  getAppBySlug: App
  getAppNetworkSettings: Scalars['String']['output']
  getAppSpaceSettings: Scalars['String']['output']
  /** @deprecated This query will be replaced by apps */
  getApps: PaginatedApp
  /** @deprecated This query will be replaced by authMember */
  getAuthMember: Member
  /** @deprecated This query will be replaced by embed */
  getEmbed: Embed
  /** @deprecated This query will be replaced by feed */
  getFeed: PaginatedPost
  /** @deprecated This query will be replaced by collection */
  getGroup: Collection
  /** @deprecated This query will be replaced by collections */
  getGroups: Array<Collection>
  /** @deprecated This query will be replaced by media */
  getMedia: Media
  /** @deprecated This query will be replaced by member */
  getMember: Member
  /** @deprecated Use authMemberAppInstallations instead */
  getMemberAppInstallations: PaginatedAppInstallation
  /** @deprecated This query will be replaced by memberInvitation */
  getMemberInvitation: MemberInvitation
  /** @deprecated This query will be replaced by memberInvitationLink */
  getMemberInvitationLink: MemberInvitationLink
  /** @deprecated This query will be replaced by memberInvitations */
  getMemberInvitations: PaginatedMemberInvitation
  /** @deprecated This query will be replaced by memberPosts */
  getMemberPosts: PaginatedPost
  /** @deprecated This query will be replaced by memberSpaces */
  getMemberSpaces: PaginatedSpaceMember
  /** @deprecated This query will be replaced by members */
  getMembers: PaginatedMember
  /** @deprecated This query will be replaced by moderationItem */
  getModerationById: ModerationItem
  /** @deprecated This query will be replaced by moderationItemReporters */
  getModerationReporters: PaginatedModerationItemReporter
  /** @deprecated This query will be replaced by moderationSettings */
  getModerationSetting: ModerationSettings
  /** @deprecated This query will be replaced by moderationItems */
  getModerations: PaginatedModeration
  /** @deprecated This query will be replaced by network */
  getNetwork: Network
  /** @deprecated Use networkAppInstallations instead */
  getNetworkAppInstallations: PaginatedAppInstallation
  /** @deprecated This query will be replaced by networkApps */
  getNetworkApps: Array<App>
  /** @deprecated This query will be replaced by networkPublicInfo */
  getNetworkPublicInfo: NetworkPublicInfo
  /** @deprecated This query will be replaced by networks */
  getNetworks: PaginatedNetwork
  /** @deprecated This query will be replaced by notifications */
  getNotifications: PaginatedNotification
  /** @deprecated This query will be replaced by notificationsCount */
  getNotificationsCount: NotificationsCount
  /** @deprecated This query will be replaced by post */
  getPost: Post
  /** @deprecated We no longer support app installation on space */
  getPostAppInstallations: PaginatedAppInstallation
  /** @deprecated This query will be replaced by postReactionParticipants */
  getPostReactionParticipants: PaginatedPostReactionParticipant
  /** @deprecated This query will be replaced by posts */
  getPosts: PaginatedPost
  /** @deprecated This query will be replaced by replies */
  getReplies: PaginatedPost
  /** @deprecated This query is replaced by analytics */
  getReport: Report
  /** @deprecated This query will be replaced by roles */
  getRoles: Array<Role>
  /** @deprecated This query will be replaced by scopes */
  getScopes: Scopes
  /** @deprecated This query will be replaced by space */
  getSpace: Space
  /** @deprecated We no longer support app installation on space */
  getSpaceAppInstallations: PaginatedAppInstallation
  /** @deprecated This query will be replaced by spaceMembers */
  getSpaceMembers: PaginatedSpaceMember
  /** @deprecated This query will be replaced by memberSpaceMembershipRequest */
  getSpaceMembershipRequestForMember: Array<SpaceJoinRequest>
  /** @deprecated This query will be replaced by spaceMembershipRequests */
  getSpaceMembershipRequests: Array<SpaceJoinRequest>
  /** @deprecated This query will be replaced by spacePinnedPosts */
  getSpacePinnedPosts: Array<Post>
  /** @deprecated This query is replaced by analytics */
  getSpaceReport: Report
  /** @deprecated This query will be replaced by spaceRoles */
  getSpaceRoles: Array<SpaceRole>
  /** @deprecated This query will be replaced by ssoMemberships */
  getSsoMemberships: Array<SsoMembership>
  /** @deprecated This query will be replaced by supportNetworkTokens */
  getSupportNetworkTokens: SupportLimitedAuthToken
  /** @deprecated This query will be replaced by tokens */
  getTokens: AuthToken
  /** @deprecated Use the global gateway instead */
  globalApp: App
  /** @deprecated Use the global gateway instead */
  globalAppCollaborators: Array<AppCollaborator>
  /** @deprecated Use the global gateway instead */
  globalAppPublications: Array<AppPublication>
  /** @deprecated Use the global gateway instead */
  globalAppSettings: AppSetting
  /** @deprecated Use the global gateway instead */
  globalApps: PaginatedApp
  /** @deprecated Use the global gateway instead */
  globalEmbed: Embed
  /** @deprecated Use the global gateway instead */
  globalEventTypes: Array<EventType>
  /** @deprecated Use the global gateway instead */
  globalMedia: Media
  /** @deprecated Use the global gateway instead */
  globalNetworks: PaginatedNetwork
  /** @deprecated Use the global gateway instead */
  globalToken: GlobalToken
  homepage?: Maybe<Page>
  /** @deprecated This query will be replaced by impersonateLoginToNetwork mutation */
  impersonateLoginToNetwork: AuthInfoWithOtp
  invitationLinkValidity: MemberInvitationLink
  /** @deprecated This query is replaced by analytics */
  leaderboard: Array<Member>
  /** @deprecated This query is replaced by analytics */
  leaderboardWithScores: Array<LeaderboardItem>
  limitedToken: AppToken
  /** @deprecated This query will be replaced by loginNetwork mutation */
  loginNetwork: AuthToken
  /** @deprecated This query will be replaced by loginNetworkWithPassword mutation */
  loginNetworkWithPassword: AuthToken
  /** @deprecated This query will be replaced by supportSsoUrl */
  loginSupportWithSso: SupportSsoUrl
  loginSupportWithSsoCode: SupportAuthToken
  /** @deprecated This query will be replaced by ssoUrl */
  loginWithSso: SsoUrl
  /** @deprecated This query will be replaced by loginWithSsoCode mutation */
  loginWithSsoCode: AuthToken
  massActionRequest: MassActionRequest
  massActionRequestInProgress: MassActionRequest
  media: Media
  member: Member
  memberInvitation: MemberInvitation
  memberInvitationLink: MemberInvitationLink
  memberInvitationValidity: MemberInvitation
  memberInvitations: PaginatedMemberInvitation
  memberPosts: PaginatedPost
  /** @deprecated This query is no longer valid. */
  memberScore: Report
  memberSpaceMembershipRequest: Array<SpaceJoinRequest>
  memberSpaces: PaginatedSpaceMember
  members: PaginatedMember
  membersByIds: Array<Member>
  /** Get messages in chat before or after a certain message, along with a cursor. The cursor can be used to fetch more messages using `messagesByCursor` query */
  messages: MessageList
  /** Get a list of messages from a chat using a cursor. The direction of the query depends on the original query where the cursor was acquired. */
  messagesByCursor: MessageList
  migrationSampleFile: Scalars['String']['output']
  moderationItem: ModerationItem
  moderationItemReporters: PaginatedModerationItemReporter
  moderationItems: PaginatedModeration
  moderationSettings: ModerationSettings
  network: Network
  networkAppInstallations: PaginatedAppInstallation
  networkApps: Array<App>
  networkPublicInfo: NetworkPublicInfo
  networks: PaginatedNetwork
  networksMembers: PaginatedPluralMember
  newDomainStatus: DomainTransferStatus
  notifications: PaginatedNotification
  notificationsCount: NotificationsCount
  oAuthCode: OAuthCode
  oAuthTokens: OAuthTokens
  oidcs: Array<Oidc>
  otp: Scalars['String']['output']
  page: Page
  pageCustomResponses: PaginatedPageCustomResponse
  passwordComplexity: PasswordComplexity
  permission: Permission
  permissions: Array<Permission>
  /** Tracks latest activity on the current user session. Can only be called once per 5 minutes. */
  pingSession: Action
  /** Get a single poll by ID. Access is granted based on poll ownership, user role, and parent entity context. */
  poll: Poll
  post: Post
  postModerationItems: PaginatedModeration
  postReactionParticipants: PaginatedPostReactionParticipant
  postType: PostType
  postTypes: PaginatedPostType
  posts: PaginatedPost
  postsByIds: Array<Post>
  /**
   * Create or get a private message space inside your community which will be visible to recipient only after first message.
   * @deprecated This query is deprecated. Use the new chat API instead.
   */
  privateMessage: Space
  probeDomain: DomainProbeResult
  /** Get the publisher settings for the given publisher. */
  publisherSettings: Publisher
  /** Recommend members based on positive and negative resource IDs */
  recommendMembers: Array<Member>
  /** Recommend posts based on positive and negative resource IDs */
  recommendPosts: Array<Post>
  /** Recommend spaces based on positive and negative resource IDs */
  recommendSpaces: Array<Space>
  redirect: Redirect
  replies: PaginatedPost
  /** @deprecated This query is replaced by analytics */
  report: Report
  roles: Array<Role>
  scopes: Scopes
  search: SearchResult
  /** Search for members with pagination. The search will sort the result based on the relevance score to the input query. */
  searchMembers: PaginatedMember
  searchMembersForSpaceInvitation: Array<MemberForSpaceInvitation>
  /** Search for participants */
  searchParticipants: Array<ChatParticipant>
  /** Search for posts with pagination. The search will sort the result based on the relevance score to the input query. */
  searchPosts: PaginatedPost
  /** Search for spaces with pagination. The search will sort the result based on the relevance score to the input query. */
  searchSpaces: PaginatedSpace
  /** Paginates over the sitemap items of the site, the items can correspond to SEO indexed posts or SEO indexed spaces */
  sitemap: PaginatedSitemap
  space: Space
  spaceJoinRequests: PaginatedSpaceJoinRequest
  spaceMember: SpaceMember
  spaceMembers: PaginatedSpaceMember
  spaceMembershipRequests: Array<SpaceJoinRequest>
  spacePinnedPosts: Array<Post>
  spacePostType: SpacePostType
  spacePostTypes: PaginatedSpacePostType
  spaceRoles: Array<SpaceRole>
  spaces: PaginatedSpace
  spacesByIds: Array<Space>
  spacesBySlugs: Array<Space>
  ssoMemberships: Array<SsoMembership>
  ssoUrl: SsoUrl
  ssos: Array<Sso>
  /** Get the subscriber settings for the auth member. */
  subscriberSettings: Subscriber
  subscriptionInformation: SubscriptionInformation
  /** Get the subscriptions for the auth member. */
  subscriptions: PaginatedNotificationSubscriptions
  supportNetworkTokens: SupportLimitedAuthToken
  supportSsoUrl: SupportSsoUrl
  systemSpaces: Array<Space>
  tagPosts: PaginatedPost
  tags: PaginatedTag
  template: Template
  templateRequest: TemplateRequest
  templates: PaginatedTemplate
  tokens: AuthToken
  translateMarkup: Array<Scalars['String']['output']>
  /** This query will only count the unread conversations in the most recent conversations (currently limited to 100 conversations). Any unread conversation after the threshold will be ignored. This criteria is subject to change without advance notice. */
  unreadChatsCount: UnreadChatsCount
  /** Get number of unread messages for the member per specified chat. */
  unreadMessageCounts: UnreadMessageCountsPerChat
  usernameAvailability: UsernameAvailability
}

export type QueryAccessGroupArgs = {
  id: Scalars['ID']['input']
}

export type QueryActivityLogsArgs = {
  query: Scalars['String']['input']
}

export type QueryAnalyticsArgs = {
  queries: Array<Scalars['String']['input']>
}

export type QueryAppArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  redirectUri?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  standing?: InputMaybe<StoreItemStanding>
  status?: InputMaybe<StoreItemStatus>
}

export type QueryAuthMemberAppInstallationArgs = {
  appId: Scalars['String']['input']
}

export type QueryAuthMemberAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryAvailableDynamicBlocksArgs = {
  context?: InputMaybe<PermissionContext>
  size?: InputMaybe<DynamicBlockSize>
}

export type QueryChatArgs = {
  id: Scalars['String']['input']
}

export type QueryChatIdFromSlugArgs = {
  slug: Scalars['String']['input']
}

export type QueryChatParticipantsArgs = {
  chatId: Scalars['String']['input']
  limit: Scalars['Int']['input']
}

export type QueryChatParticipantsByCursorArgs = {
  chatId: Scalars['String']['input']
  cursor: Scalars['String']['input']
  limit: Scalars['Int']['input']
}

export type QueryChatParticipantsByIdsArgs = {
  chatId: Scalars['String']['input']
  participantIds: Array<Scalars['String']['input']>
}

export type QueryChatsArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>
  direction?: InputMaybe<QueryDirection>
  limit: Scalars['Int']['input']
  messageId?: InputMaybe<Scalars['String']['input']>
  timestamp?: InputMaybe<Scalars['Int']['input']>
}

export type QueryChatsByCursorArgs = {
  cursor: Scalars['String']['input']
  limit: Scalars['Int']['input']
}

export type QueryCheckDomainAvailabilityArgs = {
  input: DomainAvailabilityInput
}

export type QueryCheckEmailAvailabilityArgs = {
  email: Scalars['String']['input']
}

export type QueryCheckInvitationLinkValidityArgs = {
  invitationLinkId: Scalars['String']['input']
}

export type QueryCheckMemberInvitationValidityArgs = {
  token: Scalars['String']['input']
}

export type QueryCheckMembersContactabilityArgs = {
  memberIds: Array<Scalars['String']['input']>
}

export type QueryCheckNewDomainStatusArgs = {
  domain: Scalars['String']['input']
}

export type QueryCheckPasswordComplexityArgs = {
  password: Scalars['String']['input']
}

export type QueryCheckUsernameAvailabilityArgs = {
  username: Scalars['String']['input']
}

export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryCollectionsArgs = {
  orderBy?: InputMaybe<CollectionListOrderByEnum>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryDomainAvailabilityArgs = {
  input: DomainAvailabilityInput
}

export type QueryDraftPollsForEntityTypeArgs = {
  parentEntityType: PollEntityType
  pollIds: Array<Scalars['String']['input']>
}

export type QueryDraftPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit?: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  scheduled?: InputMaybe<Scalars['Boolean']['input']>
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryDraftPostsCountArgs = {
  scheduled?: InputMaybe<Scalars['Boolean']['input']>
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryDynamicBlockArgs = {
  blockId: Scalars['ID']['input']
}

export type QueryDynamicBlockByKeyArgs = {
  appId: Scalars['ID']['input']
  key: Scalars['String']['input']
}

export type QueryDynamicBlocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  appIds?: InputMaybe<Array<Scalars['ID']['input']>>
  before?: InputMaybe<Scalars['String']['input']>
  contexts?: InputMaybe<Array<PermissionContext>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryEmailAvailabilityArgs = {
  email: Scalars['String']['input']
}

export type QueryEmailLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  recipient?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  statuses?: InputMaybe<Array<EmailStatus>>
  types?: InputMaybe<Array<EmailType>>
}

export type QueryEmbedArgs = {
  input: EmbedInput
}

export type QueryExploreSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  collectionId?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryExportMemberRequestArgs = {
  id: Scalars['ID']['input']
}

export type QueryExportMemberRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ExportListOrderByEnum>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  statuses?: InputMaybe<Array<ExportStatus>>
}

export type QueryExternalSearchArgs = {
  query: Scalars['String']['input']
}

export type QueryExtraPropertiesArgs = {
  entityId?: InputMaybe<Scalars['String']['input']>
  entityType: ExtraPropertyEntityType
  keys?: InputMaybe<Array<Scalars['String']['input']>>
}

export type QueryFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filterBy?: InputMaybe<Array<PostListFilterByInput>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  onlyMemberSpaces?: InputMaybe<Scalars['Boolean']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  orderByString?: InputMaybe<Scalars['String']['input']>
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFilterMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Int']['input']
  orderBy?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFilterPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Int']['input']
  orderBy?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFilterSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Int']['input']
  orderBy?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFindChatWithMemberArgs = {
  recipientId: Scalars['String']['input']
}

export type QueryGetAppByIdArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetAppBySlugArgs = {
  slug: Scalars['String']['input']
}

export type QueryGetAppNetworkSettingsArgs = {
  appId: Scalars['ID']['input']
}

export type QueryGetAppSpaceSettingsArgs = {
  appId: Scalars['ID']['input']
  spaceId: Scalars['ID']['input']
}

export type QueryGetAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<StoreItemStatus>
}

export type QueryGetEmbedArgs = {
  input: EmbedInput
}

export type QueryGetFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filterBy?: InputMaybe<Array<PostListFilterByInput>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  onlyMemberSpaces?: InputMaybe<Scalars['Boolean']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGetGroupArgs = {
  groupId?: InputMaybe<Scalars['ID']['input']>
}

export type QueryGetMediaArgs = {
  mediaId: Scalars['ID']['input']
}

export type QueryGetMemberArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type QueryGetMemberAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryGetMemberInvitationArgs = {
  id: Scalars['ID']['input']
}

export type QueryGetMemberInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>
  status?: InputMaybe<MemberInvitationStatus>
}

export type QueryGetMemberPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  memberId: Scalars['ID']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGetMemberSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  groupId?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  memberId: Scalars['ID']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryGetMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>
  status?: InputMaybe<Array<MemberStatusInput>>
}

export type QueryGetModerationByIdArgs = {
  moderationId: Scalars['ID']['input']
}

export type QueryGetModerationReportersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  moderationId: Scalars['String']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGetModerationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  entityId?: InputMaybe<Scalars['String']['input']>
  entityType?: InputMaybe<ModerationEntityType>
  flaggedBy?: InputMaybe<FlaggedType>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ModerationStatus>
}

export type QueryGetNetworkAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryGetNetworkAppsArgs = {
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryGetNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGetNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  verb?: InputMaybe<NotificationVerb>
}

export type QueryGetPostArgs = {
  postId: Scalars['ID']['input']
}

export type QueryGetPostAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  postId: Scalars['ID']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryGetPostReactionParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  postId: Scalars['ID']['input']
  reaction: Scalars['ID']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGetPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  excludePins?: InputMaybe<Scalars['Boolean']['input']>
  filterBy?: InputMaybe<Array<PostListFilterByInput>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryGetRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  excludePins?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  postId: Scalars['ID']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGetReportArgs = {
  input: ReportInput
}

export type QueryGetScopesArgs = {
  contexts?: InputMaybe<Array<PermissionsContextInput>>
}

export type QueryGetSpaceArgs = {
  spaceId?: InputMaybe<Scalars['ID']['input']>
  spaceSlug?: InputMaybe<Scalars['ID']['input']>
}

export type QueryGetSpaceAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId: Scalars['ID']['input']
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryGetSpaceMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>
  spaceId: Scalars['ID']['input']
}

export type QueryGetSpaceMembershipRequestForMemberArgs = {
  status?: InputMaybe<SpaceJoinRequestStatus>
}

export type QueryGetSpaceMembershipRequestsArgs = {
  spaceId: Scalars['ID']['input']
  status?: InputMaybe<SpaceJoinRequestStatus>
}

export type QueryGetSpacePinnedPostsArgs = {
  spaceId: Scalars['ID']['input']
}

export type QueryGetSpaceReportArgs = {
  input: ReportInput
  spaceId: Scalars['String']['input']
}

export type QueryGetSpaceRolesArgs = {
  spaceId?: InputMaybe<Scalars['ID']['input']>
}

export type QueryGetSsoMembershipsArgs = {
  memberId: Scalars['String']['input']
}

export type QueryGetSupportNetworkTokensArgs = {
  input: CreateLimitedSupportTokenInput
}

export type QueryGetTokensArgs = {
  networkDomain?: InputMaybe<Scalars['String']['input']>
  networkId?: InputMaybe<Scalars['ID']['input']>
  otp?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
}

export type QueryGlobalAppArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type QueryGlobalAppCollaboratorsArgs = {
  appId: Scalars['String']['input']
}

export type QueryGlobalAppPublicationsArgs = {
  appId: Scalars['ID']['input']
}

export type QueryGlobalAppSettingsArgs = {
  context: PermissionContext
  entityId?: InputMaybe<Scalars['ID']['input']>
  networkId: Scalars['ID']['input']
}

export type QueryGlobalAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  standing?: InputMaybe<StoreItemStanding>
  status?: InputMaybe<StoreItemStatus>
}

export type QueryGlobalEmbedArgs = {
  input: EmbedInput
}

export type QueryGlobalMediaArgs = {
  id: Scalars['ID']['input']
}

export type QueryGlobalNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleType?: InputMaybe<RoleType>
}

export type QueryGlobalTokenArgs = {
  input: GlobalTokenInput
}

export type QueryHomepageArgs = {
  type?: InputMaybe<HomeSpaceType>
}

export type QueryImpersonateLoginToNetworkArgs = {
  input: ImpersonateLoginToNetworkInput
}

export type QueryInvitationLinkValidityArgs = {
  id: Scalars['String']['input']
}

export type QueryLeaderboardArgs = {
  input: ReportInput
}

export type QueryLeaderboardWithScoresArgs = {
  includeAuthMember: Scalars['Boolean']['input']
  input: ReportInput
}

export type QueryLimitedTokenArgs = {
  context?: InputMaybe<PermissionContext>
  entityId?: InputMaybe<Scalars['String']['input']>
  impersonateMemberId?: InputMaybe<Scalars['String']['input']>
  networkId: Scalars['String']['input']
}

export type QueryLoginNetworkArgs = {
  input: LoginNetworkWithPasswordInput
}

export type QueryLoginNetworkWithPasswordArgs = {
  input: LoginNetworkWithPasswordInput
}

export type QueryLoginSupportWithSsoArgs = {
  input?: InputMaybe<SupportSsoUrlInput>
}

export type QueryLoginSupportWithSsoCodeArgs = {
  input: LoginSupportWithSsoCodeInput
}

export type QueryLoginWithSsoArgs = {
  input: SsoUrlInput
}

export type QueryLoginWithSsoCodeArgs = {
  input: LoginWithSsoCodeInput
}

export type QueryMassActionRequestArgs = {
  id: Scalars['String']['input']
}

export type QueryMediaArgs = {
  id: Scalars['ID']['input']
}

export type QueryMemberArgs = {
  externalId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type QueryMemberInvitationArgs = {
  id: Scalars['ID']['input']
}

export type QueryMemberInvitationValidityArgs = {
  token: Scalars['String']['input']
}

export type QueryMemberInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filterBy?: InputMaybe<Array<MemberInvitationFilterByInput>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['String']['input']>>
  status?: InputMaybe<MemberInvitationStatus>
}

export type QueryMemberPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  hasParent?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
  memberId: Scalars['ID']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryMemberScoreArgs = {
  input: ReportInput
  spaceId?: InputMaybe<Scalars['String']['input']>
}

export type QueryMemberSpaceMembershipRequestArgs = {
  status?: InputMaybe<SpaceJoinRequestStatus>
}

export type QueryMemberSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  collectionId?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  memberId: Scalars['ID']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filterBy?: InputMaybe<Array<MemberListFilterByInput>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Scalars['String']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>
  status?: InputMaybe<Array<MemberStatusInput>>
}

export type QueryMembersByIdsArgs = {
  ids: Array<Scalars['String']['input']>
}

export type QueryMessagesArgs = {
  addressSignature: Scalars['String']['input']
  chatId: Scalars['String']['input']
  direction: QueryDirection
  inclusive?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
  messageId: Scalars['String']['input']
  pageId: Scalars['String']['input']
}

export type QueryMessagesByCursorArgs = {
  chatId: Scalars['String']['input']
  cursor: Scalars['String']['input']
  limit: Scalars['Int']['input']
}

export type QueryMigrationSampleFileArgs = {
  type?: InputMaybe<PermissionContext>
}

export type QueryModerationItemArgs = {
  id: Scalars['ID']['input']
}

export type QueryModerationItemReportersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  moderationId: Scalars['String']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryModerationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  entityId?: InputMaybe<Scalars['String']['input']>
  entityType?: InputMaybe<ModerationEntityType>
  flaggedBy?: InputMaybe<FlaggedType>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reportCategories?: InputMaybe<Array<ReportCategory>>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ModerationStatus>
}

export type QueryNetworkAppInstallationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryNetworkAppsArgs = {
  status?: InputMaybe<AppInstallationStatus>
}

export type QueryNetworksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryNetworksMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleType?: InputMaybe<RoleType>
  status?: InputMaybe<Array<MemberStatus>>
}

export type QueryNewDomainStatusArgs = {
  domain: Scalars['String']['input']
}

export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  verb?: InputMaybe<NotificationVerb>
}

export type QueryOAuthCodeArgs = {
  input: OAuthCodeInput
}

export type QueryOAuthTokensArgs = {
  input: OAuthTokenInput
}

export type QueryPageArgs = {
  path: Scalars['String']['input']
}

export type QueryPageCustomResponsesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  creatorType?: InputMaybe<CreatorType>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPasswordComplexityArgs = {
  password: Scalars['String']['input']
}

export type QueryPermissionArgs = {
  id: Scalars['ID']['input']
}

export type QueryPollArgs = {
  id: Scalars['ID']['input']
}

export type QueryPostArgs = {
  id: Scalars['ID']['input']
}

export type QueryPostModerationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  entityId?: InputMaybe<Scalars['String']['input']>
  flaggedBy?: InputMaybe<FlaggedType>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reportCategories?: InputMaybe<Array<ReportCategory>>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<ModerationStatus>
}

export type QueryPostReactionParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  postId: Scalars['ID']['input']
  reaction: Scalars['ID']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPostTypeArgs = {
  id: Scalars['ID']['input']
}

export type QueryPostTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  context?: InputMaybe<PostTypeContext>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  excludePins?: InputMaybe<Scalars['Boolean']['input']>
  filterBy?: InputMaybe<Array<PostListFilterByInput>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  orderByString?: InputMaybe<Scalars['String']['input']>
  postTypeIds?: InputMaybe<Array<Scalars['String']['input']>>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryPostsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>
  statuses?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type QueryPrivateMessageArgs = {
  input: PrivateMessageInput
}

export type QueryProbeDomainArgs = {
  domain: Scalars['String']['input']
}

export type QueryPublisherSettingsArgs = {
  publisherId: Scalars['String']['input']
}

export type QueryRecommendMembersArgs = {
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Float']['input']
  negativeResourceIds?: InputMaybe<Array<Scalars['String']['input']>>
  positiveResourceIds: Array<Scalars['String']['input']>
}

export type QueryRecommendPostsArgs = {
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Float']['input']
  negativeResourceIds?: InputMaybe<Array<Scalars['String']['input']>>
  positiveResourceIds: Array<Scalars['String']['input']>
}

export type QueryRecommendSpacesArgs = {
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Float']['input']
  negativeResourceIds?: InputMaybe<Array<Scalars['String']['input']>>
  positiveResourceIds: Array<Scalars['String']['input']>
}

export type QueryRedirectArgs = {
  url: Scalars['String']['input']
}

export type QueryRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  excludePins?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PostListOrderByEnum>
  postId: Scalars['ID']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryReportArgs = {
  input: ReportInput
  spaceId?: InputMaybe<Scalars['String']['input']>
}

export type QueryRolesArgs = {
  orderBy?: InputMaybe<RoleListOrderByEnum>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryScopesArgs = {
  contexts?: InputMaybe<Array<PermissionsContextInput>>
}

export type QuerySearchArgs = {
  input: SearchInput
}

export type QuerySearchMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Int']['input']
  query: Scalars['String']['input']
  searchConfig?: InputMaybe<SearchConfigInput>
}

export type QuerySearchMembersForSpaceInvitationArgs = {
  input: SearchMembersForSpaceInvitationInput
}

export type QuerySearchParticipantsArgs = {
  chatId: Scalars['String']['input']
  term: Scalars['String']['input']
}

export type QuerySearchPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Int']['input']
  query: Scalars['String']['input']
  searchConfig?: InputMaybe<SearchConfigInput>
}

export type QuerySearchSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filters?: InputMaybe<FiltersInput>
  limit: Scalars['Int']['input']
  query: Scalars['String']['input']
  searchConfig?: InputMaybe<SearchConfigInput>
}

export type QuerySitemapArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spacePath?: InputMaybe<Scalars['ID']['input']>
}

export type QuerySpaceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['ID']['input']>
}

export type QuerySpaceJoinRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  memberId?: InputMaybe<Scalars['ID']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['ID']['input']>
  status?: InputMaybe<SpaceJoinRequestStatus>
}

export type QuerySpaceMemberArgs = {
  memberId: Scalars['ID']['input']
  spaceId: Scalars['ID']['input']
}

export type QuerySpaceMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<SpaceMemberListOrderByEnum>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>
  spaceId: Scalars['ID']['input']
}

export type QuerySpaceMembershipRequestsArgs = {
  spaceId: Scalars['ID']['input']
  status?: InputMaybe<SpaceJoinRequestStatus>
}

export type QuerySpacePinnedPostsArgs = {
  spaceId: Scalars['ID']['input']
}

export type QuerySpacePostTypeArgs = {
  postTypeId: Scalars['ID']['input']
  spaceId: Scalars['ID']['input']
}

export type QuerySpacePostTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  context?: InputMaybe<PostTypeContext>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId: Scalars['ID']['input']
}

export type QuerySpaceRolesArgs = {
  orderBy?: InputMaybe<SpaceRoleListOrderByEnum>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['ID']['input']>
}

export type QuerySpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  collectionId?: InputMaybe<Scalars['String']['input']>
  exploreOnly?: InputMaybe<Scalars['Boolean']['input']>
  filterBy?: InputMaybe<Array<EntityListFilterByInput>>
  limit: Scalars['Int']['input']
  memberId?: InputMaybe<Scalars['ID']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<SpaceListOrderByEnum>
  orderByString?: InputMaybe<Scalars['String']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  type?: InputMaybe<Array<SpaceType>>
}

export type QuerySpacesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>
}

export type QuerySpacesBySlugsArgs = {
  slugs: Array<Scalars['String']['input']>
}

export type QuerySsoMembershipsArgs = {
  memberId: Scalars['String']['input']
}

export type QuerySsoUrlArgs = {
  input: SsoUrlInput
}

export type QuerySsosArgs = {
  status?: InputMaybe<SsoStatus>
}

export type QuerySubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  publisherType?: InputMaybe<PublisherType>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type QuerySupportNetworkTokensArgs = {
  networkId: Scalars['String']['input']
}

export type QuerySupportSsoUrlArgs = {
  input?: InputMaybe<SupportSsoUrlInput>
}

export type QueryTagPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['ID']['input']>
  tagId?: InputMaybe<Scalars['ID']['input']>
  tagSlug?: InputMaybe<Scalars['String']['input']>
}

export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  ids?: InputMaybe<Array<Scalars['ID']['input']>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TagsOrderByEnum>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spaceId?: InputMaybe<Scalars['ID']['input']>
}

export type QueryTemplateArgs = {
  id: Scalars['String']['input']
}

export type QueryTemplateRequestArgs = {
  id: Scalars['String']['input']
}

export type QueryTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  categories?: InputMaybe<Array<Scalars['String']['input']>>
  entityTypes?: InputMaybe<Array<TemplateEntityType>>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<StoreItemStatus>
}

export type QueryTokensArgs = {
  networkDomain?: InputMaybe<Scalars['String']['input']>
  networkId?: InputMaybe<Scalars['ID']['input']>
  otp?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
  ssoToken?: InputMaybe<Scalars['String']['input']>
}

export type QueryTranslateMarkupArgs = {
  format?: InputMaybe<TranslationMarkupFormat>
  input?: InputMaybe<Array<TranslationMarkupInput>>
  markups?: InputMaybe<Array<Scalars['String']['input']>>
}

export type QueryUnreadChatsCountArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryUnreadMessageCountsArgs = {
  chatIds: Array<Scalars['String']['input']>
}

export type QueryUsernameAvailabilityArgs = {
  username: Scalars['String']['input']
}

export enum QueryDirection {
  After = 'After',
  Before = 'Before',
}

/** RangeInput class is used to filter fields of type date or number. It allows specifying a range with greater than, greater than or equal, less than, and less than or equal conditions. */
export type RangeInput = {
  /** Greater than condition for date or number fields (value should be a JSON string) */
  gt?: InputMaybe<Scalars['String']['input']>
  /** Greater than or equal condition for date or number fields (value should be a JSON string) */
  gte?: InputMaybe<Scalars['String']['input']>
  /** Less than condition for date or number fields (value should be a JSON string) */
  lt?: InputMaybe<Scalars['String']['input']>
  /** Less than or equal condition for date or number fields (value should be a JSON string) */
  lte?: InputMaybe<Scalars['String']['input']>
}

export type ReOrderSchemaFieldInput = {
  index: Scalars['Int']['input']
  key: Scalars['String']['input']
}

export enum ReactionType {
  EMOJI_BASE = 'EMOJI_BASE',
  LIKE_BASE = 'LIKE_BASE',
  VOTE_BASE = 'VOTE_BASE',
}

export type Redirect = {
  resolvedUrl: Scalars['String']['output']
  url: Scalars['String']['output']
}

export enum RelationTypeOptions {
  Media = 'Media',
  Member = 'Member',
  Post = 'Post',
  Space = 'Space',
  Tag = 'Tag',
}

export type RemoveMembersFromGroupInput = {
  memberIds: Array<Scalars['String']['input']>
}

export type RemovedParticipantsMetadata = {
  removedParticipants: Array<ChatParticipant>
  type: ChatLogType
}

export type ReorderBadgeInput = {
  /** The id of the badge that will be directly before the moved badge. If not provided, the badge will be moved to the beginning of the list */
  previousBadgeId?: InputMaybe<Scalars['String']['input']>
}

export type ReorderBadgesInput = {
  /** The new order of the badges in the network. This must contain all active badges in the network */
  badgeOrderIds: Array<Scalars['String']['input']>
}

export type Report = {
  data?: Maybe<Array<ReportData>>
  description?: Maybe<Scalars['String']['output']>
  endDate?: Maybe<Scalars['DateTime']['output']>
  previousValue?: Maybe<Scalars['String']['output']>
  slug: Scalars['String']['output']
  startDate?: Maybe<Scalars['DateTime']['output']>
  title: Scalars['String']['output']
  tooltip?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export enum ReportCategory {
  HARASSMENT = 'HARASSMENT',
  MISINFORMATION = 'MISINFORMATION',
  NUDITY = 'NUDITY',
  OTHER = 'OTHER',
  SPAM = 'SPAM',
  SUICIDE = 'SUICIDE',
  TERRORISM = 'TERRORISM',
  VIOLENCE = 'VIOLENCE',
}

export type ReportData = {
  description?: Maybe<Scalars['String']['output']>
  key: Scalars['String']['output']
  previousValue?: Maybe<ReportDataValue>
  type: ReportDataType
  value: ReportDataValue
}

export enum ReportDataType {
  chartData = 'chartData',
  entityReport = 'entityReport',
  intValue = 'intValue',
  stringValue = 'stringValue',
}

export type ReportDataValue = ChartData | EntityReport | IntValue | StringValue

export type ReportEntities = {
  actor?: Maybe<Member>
  app?: Maybe<App>
  member?: Maybe<Member>
  person?: Maybe<Member>
  post?: Maybe<Post>
  space?: Maybe<Space>
  tag?: Maybe<Tag>
}

export type ReportInput = {
  endDate?: InputMaybe<Scalars['String']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  slug: ReportSlug
  sort?: InputMaybe<ColumnSortInput>
  startDate?: InputMaybe<Scalars['String']['input']>
  timeFrame?: InputMaybe<ReportTimeFrame>
  timeZone: Scalars['String']['input']
}

export type ReportPayload = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type ReportRecord = {
  entities: ReportEntities
  payload: Array<ReportPayload>
}

export enum ReportSlug {
  activeMembers = 'activeMembers',
  averageDailyActiveMembers = 'averageDailyActiveMembers',
  highlights = 'highlights',
  memberScore = 'memberScore',
  newMembersOverTime = 'newMembersOverTime',
  newPosts = 'newPosts',
  newReactions = 'newReactions',
  newReplies = 'newReplies',
  popularDaysOfWeek = 'popularDaysOfWeek',
  popularHoursOfDay = 'popularHoursOfDay',
  postsVSreplies = 'postsVSreplies',
  topMembers = 'topMembers',
  topPosts = 'topPosts',
  topSpaces = 'topSpaces',
  totalMembers = 'totalMembers',
  totalPosts = 'totalPosts',
  totalReactions = 'totalReactions',
  totalReplies = 'totalReplies',
  totalVisitors = 'totalVisitors',
  trendingTags = 'trendingTags',
}

export enum ReportTimeFrame {
  allTime = 'allTime',
  lastCalendarQuarter = 'lastCalendarQuarter',
  lastCalendarYear = 'lastCalendarYear',
  lastMonth = 'lastMonth',
  lastNinetyDays = 'lastNinetyDays',
  lastSevenDays = 'lastSevenDays',
  lastThirtyDays = 'lastThirtyDays',
  lastTwelveMonth = 'lastTwelveMonth',
  lastWeek = 'lastWeek',
  today = 'today',
  yesterday = 'yesterday',
}

export type ReportableEntity = Member | Post | Space | Tag

export enum ReportableEntityType {
  member = 'member',
  post = 'post',
  space = 'space',
}

export type RequestGlobalTokenInput = {
  captchaToken?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
}

export type ResetPasswordInput = {
  email: Scalars['String']['input']
}

export enum RichTextTypeOptions {
  html = 'html',
  markup = 'markup',
}

export type Role = {
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  scopes: Array<Scalars['String']['output']>
  type?: Maybe<RoleType>
  visible: Scalars['Boolean']['output']
}

export enum RoleListOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

export enum RoleType {
  admin = 'admin',
  guest = 'guest',
  member = 'member',
  moderator = 'moderator',
}

export type Scopes = {
  contextAwareScopes: Array<ContextScopes>
  scopes: Array<Scalars['String']['output']>
}

/** SearchConfigInput class is used to configure the search. */
export type SearchConfigInput = {
  /** Enable full text search */
  fullTextEnabled: Scalars['Boolean']['input']
  /** Fusion kind */
  fusionKind: SearchFusionKind
  /** Fusion score threshold */
  fusionScoreThreshold: Scalars['Float']['input']
  /** Enable vector embed search */
  vectorEmbedEnabled: Scalars['Boolean']['input']
  /** Vector embed score threshold */
  vectorEmbedScoreThreshold: Scalars['Float']['input']
  /** Enable vector text search */
  vectorTextEnabled: Scalars['Boolean']['input']
  /** Vector text score threshold */
  vectorTextScoreThreshold: Scalars['Float']['input']
}

export type SearchEntity = {
  by?: Maybe<By>
  content?: Maybe<Scalars['String']['output']>
  created?: Maybe<Scalars['DateTime']['output']>
  entity?: Maybe<SearchObjectEntity>
  entityId?: Maybe<Scalars['String']['output']>
  entityType: SearchEntityType
  id: Scalars['ID']['output']
  in?: Maybe<In>
  media?: Maybe<Media>
  subtitle?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Array<Scalars['String']['output']>>
  title: Scalars['String']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type SearchEntityGroup = {
  entityType: SearchEntityType
  hits: Array<SearchEntity>
}

export enum SearchEntityType {
  External = 'External',
  member = 'member',
  post = 'post',
  space = 'space',
}

export enum SearchFusionKind {
  dbsf = 'dbsf',
  rrf = 'rrf',
}

export type SearchInput = {
  filters?: InputMaybe<Array<DeprecatedFiltersInput>>
  includeExternal?: InputMaybe<Scalars['Boolean']['input']>
  query: Scalars['String']['input']
}

export type SearchMembersForSpaceInvitationInput = {
  query: Scalars['String']['input']
  spaceId: Scalars['ID']['input']
}

export type SearchNetworkSettings = {
  askAiAvailability: AskAiAvailability
  /** @deprecated Use askAiAvailability instead */
  askAiEnabled: Scalars['Boolean']['output']
  availableSearchSources: AvailableSearchSources
  /** Space IDs for official resources that appears in a separate section at the top of search results and has higher priority in Ask AI feature */
  officialResourcesSpaceIds: Array<Scalars['String']['output']>
}

export type SearchObjectEntity = Member | Post | Space

export type SearchResult = {
  hits: Array<SearchEntityGroup>
  totalCount: Scalars['Float']['output']
}

export type SendMessageToChatInput = {
  /** IDs of attached files. */
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>
  content: Scalars['String']['input']
  /** IDs of embedded links. */
  embedIds?: InputMaybe<Array<Scalars['String']['input']>>
  /** IDs of attached images. */
  imageIds?: InputMaybe<Array<Scalars['String']['input']>>
  nonce?: InputMaybe<Scalars['String']['input']>
}

export type SendMessageToMemberInput = {
  message: SendMessageToChatInput
  recipientId: Scalars['String']['input']
}

export type Settings = {
  captcha?: Maybe<CaptchaSettings>
  contentTranslation?: Maybe<ContentTranslationSettings>
  emailDigestEnabled: Scalars['Boolean']['output']
  emailDigestLayoutId: Scalars['String']['output']
  emailDigestRecentPostsFilter: EmailDigestRecentPostsFilter
  emailEnabled: Scalars['Boolean']['output']
  emailFrom?: Maybe<Scalars['String']['output']>
  emailNotificationEnabled: Scalars['Boolean']['output']
  fileSizeLimit: Scalars['Float']['output']
  fileTypesLimit: Array<Scalars['String']['output']>
  imageSizeLimit: Scalars['Float']['output']
  imageTypesLimit: Array<Scalars['String']['output']>
  memberPermissions?: Maybe<MembersPermissionSettings>
  /** @deprecated This field will be replaced by privateMessaging.membersCanTurnOffPrivateMessaging */
  membersCanTurnOffPrivateMessaging?: Maybe<Scalars['Boolean']['output']>
  /** @deprecated This field will be replaced by privateMessaging.membersCanUsePrivateMessaging */
  membersCanUsePrivateMessaging?: Maybe<Scalars['Boolean']['output']>
  privateMessaging?: Maybe<PrivateMessagingSettings>
  /** @deprecated This field will be replaced by privateMessaging.privateMessagingEnabled */
  privateMessagingEnabled?: Maybe<Scalars['Boolean']['output']>
  xFrameEmbedding?: Maybe<XFrameEmbeddingSettings>
}

export enum ShortContentFormat {
  Html = 'Html',
  Text = 'Text',
}

export type Shortcut = {
  app?: Maybe<App>
  appId: Scalars['ID']['output']
  description?: Maybe<Scalars['String']['output']>
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  key: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type SignedUrl = {
  fields: Scalars['String']['output']
  mediaDownloadUrl: Scalars['String']['output']
  mediaId: Scalars['ID']['output']
  mediaUrl: Scalars['String']['output']
  signedUrl: Scalars['String']['output']
  urls?: Maybe<MediaUrls>
}

export type Sitemap = {
  /** The id of the sitemap item */
  id: Scalars['ID']['output']
  lastModifiedAt: Scalars['DateTime']['output']
  url: Scalars['String']['output']
}

export type SitemapEdge = {
  cursor: Scalars['String']['output']
  node: Sitemap
}

export type Slate = {
  blocks: Array<Block>
  id?: Maybe<Scalars['String']['output']>
  restrictions?: Maybe<SlateRestrictions>
  rootBlock: Scalars['String']['output']
}

export type SlateInput = {
  blocks: Array<BlockInput>
  rootBlock: Scalars['String']['input']
}

export type SlateRestrictions = {
  lockedChildrenBlocks?: Maybe<Array<Scalars['String']['output']>>
  nonEditableBlocks?: Maybe<Array<Scalars['String']['output']>>
  nonRemovableBlocks?: Maybe<Array<Scalars['String']['output']>>
}

export type SlateUpdatesInput = {
  addedBlocks?: InputMaybe<Array<BlockInput>>
  removedBlocks?: InputMaybe<Array<Scalars['String']['input']>>
  rootBlock?: InputMaybe<Scalars['String']['input']>
  updatedBlocks?: InputMaybe<Array<UpdateBlockInput>>
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type Space = {
  address: SpaceAddress
  authMemberProps?: Maybe<SpaceAuthMemberProps>
  banner?: Maybe<Media>
  bannerId?: Maybe<Scalars['ID']['output']>
  collection?: Maybe<Collection>
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<Member>
  createdById: Scalars['ID']['output']
  customOrderingIndexInGroup: Scalars['Float']['output']
  customSeoDetail?: Maybe<CustomSeoDetail>
  description?: Maybe<Scalars['String']['output']>
  externalId?: Maybe<Scalars['ID']['output']>
  externalUrl?: Maybe<Scalars['String']['output']>
  groupId?: Maybe<Scalars['ID']['output']>
  hidden?: Maybe<Scalars['Boolean']['output']>
  highlightedTagIds: Array<Scalars['ID']['output']>
  highlightedTags?: Maybe<Array<Tag>>
  id: Scalars['ID']['output']
  image?: Maybe<Media>
  imageId?: Maybe<Scalars['ID']['output']>
  /** @deprecated We no longer support app installation on space */
  installedApps?: Maybe<PaginatedAppInstallation>
  inviteOnly?: Maybe<Scalars['Boolean']['output']>
  isHomepage?: Maybe<Scalars['Boolean']['output']>
  isNewUserHomepage?: Maybe<Scalars['Boolean']['output']>
  isReturningUserHomepage?: Maybe<Scalars['Boolean']['output']>
  key: Scalars['String']['output']
  layout: Scalars['String']['output']
  members?: Maybe<PaginatedSpaceMember>
  membersCount: Scalars['Int']['output']
  name: Scalars['String']['output']
  network?: Maybe<Network>
  networkId: Scalars['ID']['output']
  nonAdminsCanInvite?: Maybe<Scalars['Boolean']['output']>
  pinnedPosts?: Maybe<Array<Post>>
  posts?: Maybe<PaginatedPost>
  postsCount?: Maybe<Scalars['Int']['output']>
  private?: Maybe<Scalars['Boolean']['output']>
  relativeUrl?: Maybe<Scalars['String']['output']>
  roles?: Maybe<Array<SpaceRole>>
  seoDetail?: Maybe<SpaceSeoDetail>
  shortcuts?: Maybe<Array<Shortcut>>
  slate?: Maybe<Slate>
  slug: Scalars['String']['output']
  subscribersCount?: Maybe<Scalars['Int']['output']>
  /** @deprecated Space tag filters is a retired concept and is no longer used. */
  tagFilter?: Maybe<TagFilter>
  /** @deprecated This field is deprecated. Use `tags` query instead. */
  tags?: Maybe<PaginatedTag>
  type: SpaceType
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
  /** @deprecated This field is deprecated and will be removed in the next major version. */
  whoCanPost?: Maybe<Array<Scalars['ID']['output']>>
  /** @deprecated This field is deprecated and will be removed in the next major version. */
  whoCanReact?: Maybe<Array<Scalars['ID']['output']>>
  /** @deprecated This field is deprecated and will be removed in the next major version. */
  whoCanReply?: Maybe<Array<Scalars['ID']['output']>>
}

export type SpaceInstalledAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  status?: InputMaybe<AppInstallationStatus>
}

export type SpaceMembersArgs = {
  limit: Scalars['Int']['input']
}

export type SpacePostsArgs = {
  excludePins?: InputMaybe<Scalars['Boolean']['input']>
  limit: Scalars['Int']['input']
}

export type SpaceTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  offset?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TagListOrderByEnum>
  query?: InputMaybe<Scalars['String']['input']>
  reverse?: InputMaybe<Scalars['Boolean']['input']>
}

export type SpaceAddress = {
  editable: Scalars['Boolean']['output']
  exact: Scalars['Boolean']['output']
  path: Scalars['String']['output']
}

export type SpaceAddressInput = {
  editable?: InputMaybe<Scalars['Boolean']['input']>
  exact: Scalars['Boolean']['input']
  path: Scalars['String']['input']
}

export type SpaceAuthMemberProps = {
  availablePostTypes?: Maybe<Array<PostType>>
  context: PermissionContext
  lastReadAt?: Maybe<Scalars['DateTime']['output']>
  membershipStatus?: Maybe<SpaceMembershipStatus>
  permissions?: Maybe<Array<ActionPermissions>>
  scopes?: Maybe<Array<Scalars['String']['output']>>
  spaceMember?: Maybe<SpaceMember>
  subscribed?: Maybe<Scalars['Boolean']['output']>
  unreadPostsCount?: Maybe<Scalars['Int']['output']>
}

export type SpaceEdge = {
  cursor: Scalars['String']['output']
  node: Space
}

export type SpaceJoinRequest = {
  id: Scalars['ID']['output']
  member?: Maybe<Member>
  spaceId: Scalars['ID']['output']
  status: SpaceJoinRequestStatus
}

export type SpaceJoinRequestEdge = {
  cursor: Scalars['String']['output']
  node: SpaceJoinRequest
}

export enum SpaceJoinRequestStatus {
  COMPLETED = 'COMPLETED',
  DECLINED = 'DECLINED',
  PENDING = 'PENDING',
}

export enum SpaceListOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  CUSTOM_ORDERING_INDEX = 'CUSTOM_ORDERING_INDEX',
  UPDATED_AT = 'UPDATED_AT',
}

export type SpaceMember = {
  member?: Maybe<Member>
  role?: Maybe<SpaceRole>
  space?: Maybe<Space>
}

export enum SpaceMemberAffiliation {
  Joined = 'Joined',
  NotJoined = 'NotJoined',
  RequestedToJoin = 'RequestedToJoin',
  UnableToJoin = 'UnableToJoin',
}

export type SpaceMemberEdge = {
  cursor: Scalars['String']['output']
  node: SpaceMember
}

export enum SpaceMemberListOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

export enum SpaceMembershipStatus {
  Archived = 'Archived',
  Closed = 'Closed',
  joined = 'joined',
  notJoined = 'notJoined',
  requested = 'requested',
}

export type SpacePostType = {
  postType?: Maybe<PostType>
  postTypeId: Scalars['ID']['output']
  space?: Maybe<Space>
  spaceId: Scalars['ID']['output']
  whoCanPost?: Maybe<Array<Scalars['ID']['output']>>
  whoCanReact?: Maybe<Array<Scalars['ID']['output']>>
  whoCanReply?: Maybe<Array<Scalars['ID']['output']>>
}

export type SpacePostTypeEdge = {
  cursor: Scalars['String']['output']
  node: SpacePostType
}

export type SpaceRole = {
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  network?: Maybe<Network>
  scopes: Array<Scalars['String']['output']>
  type?: Maybe<SpaceRoleType>
}

export enum SpaceRoleListOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

export enum SpaceRoleType {
  admin = 'admin',
  member = 'member',
}

export type SpaceSeoDetail = {
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<Media>
  title: Scalars['String']['output']
}

export type SpaceSeoDetailInput = {
  description?: InputMaybe<Scalars['String']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
}

export enum SpaceType {
  Broadcast = 'Broadcast',
  Entity = 'Entity',
  Group = 'Group',
  Page = 'Page',
  PrivateMessage = 'PrivateMessage',
}

export type Sso = {
  allowSignUp?: Maybe<Scalars['Boolean']['output']>
  authorizationUrl?: Maybe<Scalars['String']['output']>
  buttonText?: Maybe<Scalars['String']['output']>
  clientId?: Maybe<Scalars['String']['output']>
  clientSecret?: Maybe<Scalars['String']['output']>
  defaultRelayState?: Maybe<Scalars['String']['output']>
  idpUrl?: Maybe<Scalars['String']['output']>
  logoutUrl?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  provider?: Maybe<SsoProvider>
  scopes?: Maybe<Array<Scalars['String']['output']>>
  settingsUrl?: Maybe<Scalars['String']['output']>
  signUpUrl?: Maybe<Scalars['String']['output']>
  status: SsoStatus
  tokenUrl?: Maybe<Scalars['String']['output']>
  type: SsoType
  userProfileUrl?: Maybe<Scalars['String']['output']>
}

export type SsoMembership = {
  id: Scalars['String']['output']
  memberId: Scalars['String']['output']
  ssoType: SsoType
}

export enum SsoProvider {
  auth0 = 'auth0',
  custom = 'custom',
  memberful = 'memberful',
  okta = 'okta',
  outseta = 'outseta',
  wordpress = 'wordpress',
}

export enum SsoStatus {
  disable = 'disable',
  enable = 'enable',
}

export enum SsoType {
  Apple = 'Apple',
  Discord = 'Discord',
  Saml = 'Saml',
  Slack = 'Slack',
  facebook = 'facebook',
  google = 'google',
  jwt = 'jwt',
  linkedin = 'linkedin',
  oauth2 = 'oauth2',
}

export type SsoUrl = {
  url: Scalars['String']['output']
}

export type SsoUrlInput = {
  callbackUrl?: InputMaybe<Scalars['String']['input']>
  invitationLinkId?: InputMaybe<Scalars['String']['input']>
  invitationToken?: InputMaybe<Scalars['String']['input']>
  redirectUri?: InputMaybe<Scalars['String']['input']>
  type: SsoType
}

export enum StaffReason {
  NetworkStaffRole = 'NetworkStaffRole',
  SamlSso = 'SamlSso',
  SpaceStaffRole = 'SpaceStaffRole',
}

export type StatusReason = {
  changedAt: Scalars['DateTime']['output']
  changedBy: NetworkStatusChangedBy
  changedById?: Maybe<Scalars['String']['output']>
  reason?: Maybe<NetworkStatusReason>
}

export enum StoreItemStanding {
  OFFICIAL = 'OFFICIAL',
  REGULAR = 'REGULAR',
  VERIFIED = 'VERIFIED',
}

export enum StoreItemStatus {
  DELETED = 'DELETED',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export type StringValue = {
  string: Scalars['String']['output']
}

export type Subscriber = {
  emailDigestEnabled: Scalars['Boolean']['output']
  emailDigestSendFrequency: EmailDigestFrequency
  emailDigestWeeklySendDay: DayOfWeek
  /** @deprecated Use instantEmailTriggers instead. */
  emailSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>
  fcmDeviceTokens: Array<Scalars['String']['output']>
  id: Scalars['ID']['output']
  /** Array of instant email triggers that the subscriber will receive. Similar to notification triggers, these can include various events that prompt an immediate email. If this array is empty, the subscriber will not receive any instant emails. */
  instantEmailTriggers: Array<NotificationTrigger>
  /** @deprecated Use instantEmailTriggers instead. */
  mentionEmailEnabled?: Maybe<Scalars['Boolean']['output']>
  /** @deprecated Use notificationTriggers instead. */
  mentionSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>
  /** @deprecated Use instantEmailTriggers instead. */
  messageEmailEnabled?: Maybe<Scalars['Boolean']['output']>
  networkId: Scalars['String']['output']
  /** Array of notification triggers that the subscriber will receive. If this array is empty, the subscriber will not receive any notifications. */
  notificationTriggers: Array<NotificationTrigger>
  /** @deprecated Use instantEmailTriggers instead. */
  reactionEmailEnabled?: Maybe<Scalars['Boolean']['output']>
  /** @deprecated Use notificationTriggers instead. */
  reactionSubscriptionEnabled?: Maybe<Scalars['Boolean']['output']>
}

export type SubscriberEdge = {
  cursor: Scalars['String']['output']
  node: Subscriber
}

export type Subscription = {
  ask: Scalars['String']['output']
  network: Network
  post: Post
  space: Space
}

export type SubscriptionAskArgs = {
  maxTokens?: InputMaybe<Scalars['Int']['input']>
  question: Scalars['String']['input']
  searchConfig?: InputMaybe<SearchConfigInput>
  temperature?: InputMaybe<Scalars['Float']['input']>
  topP?: InputMaybe<Scalars['Float']['input']>
}

export type SubscriptionCheckoutSession = {
  url: Scalars['String']['output']
}

export type SubscriptionInformation = {
  addons?: Maybe<Array<AddonInformation>>
  currentProduct?: Maybe<BillingProduct>
  isManual: Scalars['Boolean']['output']
  planId?: Maybe<Scalars['String']['output']>
  planName?: Maybe<Scalars['String']['output']>
  planPriceId?: Maybe<Scalars['String']['output']>
  planPriceInterval?: Maybe<BillingPriceInterval>
}

export type SupportAuthToken = {
  accessToken: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

export type SupportLimitedAuthToken = {
  accessToken: Scalars['String']['output']
  member: Member
}

export type SupportSsoUrl = {
  url: Scalars['String']['output']
}

export type SupportSsoUrlInput = {
  callbackUrl?: InputMaybe<Scalars['String']['input']>
}

export type Tag = {
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  slug: Scalars['String']['output']
  /** @deprecated Tags are network-level objects. spaceId is no longer required to identify them. */
  spaceId?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type TagEdge = {
  cursor: Scalars['String']['output']
  node: Tag
}

export type TagFilter = {
  filterType: TagFilterType
  filters: Array<Scalars['String']['output']>
}

export enum TagFilterType {
  BLACKLIST = 'BLACKLIST',
  WHITELIST = 'WHITELIST',
}

export enum TagListOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  ID = 'ID',
  UPDATED_AT = 'UPDATED_AT',
}

export enum TagsOrderByEnum {
  CREATED_AT = 'CREATED_AT',
  ID = 'ID',
  UPDATED_AT = 'UPDATED_AT',
}

export type Template = {
  about?: Maybe<Scalars['String']['output']>
  appIds: Array<Scalars['String']['output']>
  apps?: Maybe<Array<App>>
  authorName?: Maybe<Scalars['String']['output']>
  authorUrl?: Maybe<Scalars['String']['output']>
  banner?: Maybe<Media>
  bannerId?: Maybe<Scalars['ID']['output']>
  categories: Array<Scalars['String']['output']>
  comingSoon: Scalars['Boolean']['output']
  contentTypes?: Maybe<Array<ContentTypeTemplate>>
  createdAt: Scalars['DateTime']['output']
  createdBy?: Maybe<Member>
  createdById?: Maybe<Scalars['ID']['output']>
  description?: Maybe<Scalars['String']['output']>
  embedIds: Array<Scalars['ID']['output']>
  embeds?: Maybe<Array<Embed>>
  entity?: Maybe<TemplateEntity>
  entityId?: Maybe<Scalars['String']['output']>
  entityProperties: Scalars['String']['output']
  entityType: TemplateEntityType
  favicon?: Maybe<Media>
  faviconId?: Maybe<Scalars['ID']['output']>
  hubContent?: Maybe<HubContent>
  hubContentId?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<Media>
  imageId?: Maybe<Scalars['ID']['output']>
  imageIds: Array<Scalars['ID']['output']>
  images?: Maybe<Array<Media>>
  installed?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  network?: Maybe<Network>
  networkId: Scalars['ID']['output']
  onFreePlan?: Maybe<Scalars['Boolean']['output']>
  previewHtml?: Maybe<Scalars['String']['output']>
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>
  requiredTemplateIds: Array<Scalars['String']['output']>
  /** @deprecated Use contentTypes instead */
  requiredTemplates?: Maybe<Array<Template>>
  slate?: Maybe<Slate>
  slug: Scalars['String']['output']
  standing: StoreItemStanding
  status: StoreItemStatus
  syncedAt?: Maybe<Scalars['DateTime']['output']>
  termsOfServiceUrl?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  updatedBy?: Maybe<Member>
  updatedById?: Maybe<Scalars['ID']['output']>
}

export type TemplateCreatedEntity = Space

export type TemplateEdge = {
  cursor: Scalars['String']['output']
  node: Template
}

export type TemplateEntity =
  | Network
  | Post
  | PostType
  | Space
  | SpacePostType
  | Tag

export enum TemplateEntityType {
  Collection = 'Collection',
  Network = 'Network',
  Post = 'Post',
  PostType = 'PostType',
  Space = 'Space',
  SpacePostType = 'SpacePostType',
  Tag = 'Tag',
}

export type TemplateFieldMapping = {
  from: Scalars['String']['output']
  to: Scalars['String']['output']
}

export type TemplateFieldMappingInput = {
  from: Scalars['String']['input']
  to: Scalars['String']['input']
}

export type TemplateRequest = {
  createdAt: Scalars['DateTime']['output']
  createdById: Scalars['String']['output']
  createdEntity?: Maybe<TemplateCreatedEntity>
  createdEntityAt?: Maybe<Scalars['DateTime']['output']>
  createdEntityId?: Maybe<Scalars['String']['output']>
  createdEntityType: TemplateEntityType
  id: Scalars['String']['output']
  networkId?: Maybe<Scalars['String']['output']>
  processedPercentage: Scalars['Float']['output']
  status: TemplateRequestStatus
  templateId: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export enum TemplateRequestStatus {
  Failed = 'Failed',
  InProgress = 'InProgress',
  Succeeded = 'Succeeded',
}

export type TemplatesMapping = {
  fields?: Maybe<Array<TemplateFieldMapping>>
  from?: Maybe<Scalars['String']['output']>
  to?: Maybe<Scalars['String']['output']>
}

export type TemplatesMappingInput = {
  fields?: InputMaybe<Array<TemplateFieldMappingInput>>
  from: Scalars['String']['input']
  to: Scalars['String']['input']
}

export type TestAppWebhookInput = {
  webhookUrl: Scalars['String']['input']
}

export enum TextTypeOptions {
  fullText = 'fullText',
  shortText = 'shortText',
}

export type Theme = {
  name: Scalars['String']['output']
  status: ThemeStatus
  tokens: ThemeTokens
}

export type ThemeColor = {
  key: Scalars['String']['output']
  weights: Array<ThemeToken>
}

export type ThemeColorToken = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type ThemeColorTokens = {
  dark?: Maybe<Array<ThemeColorToken>>
  light?: Maybe<Array<ThemeColorToken>>
}

export type ThemeColors = {
  dark?: Maybe<Array<ThemeColor>>
  light?: Maybe<Array<ThemeColor>>
}

export enum ThemeStatus {
  draft = 'draft',
  published = 'published',
}

export type ThemeToken = {
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type ThemeTokens = {
  breakpoints?: Maybe<Array<ThemeToken>>
  colors?: Maybe<Array<ThemeToken>>
  fontSizes?: Maybe<Array<ThemeToken>>
  fontWeights?: Maybe<Array<ThemeToken>>
  opacity?: Maybe<Array<ThemeToken>>
  shadows?: Maybe<Array<ThemeToken>>
  sizes?: Maybe<Array<ThemeToken>>
  textStyles?: Maybe<Array<ThemeToken>>
  zIndices?: Maybe<Array<ThemeToken>>
}

export type Themes = {
  active: Theme
  drafts?: Maybe<Array<Theme>>
  published: Array<Theme>
}

export type Toast = {
  description?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['Float']['output']>
  status?: Maybe<ToastStatus>
  title?: Maybe<Scalars['String']['output']>
}

export enum ToastStatus {
  Error = 'Error',
  Info = 'Info',
  Neutral = 'Neutral',
  Success = 'Success',
  Warning = 'Warning',
}

export type TopNavigation = {
  alignment: TopNavigationAlignment
  enabled: Scalars['Boolean']['output']
  items: Array<NavigationItem>
}

export enum TopNavigationAlignment {
  CENTER = 'CENTER',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type TransferGroupChatOwnershipInput = {
  /** The member id of the new owner. */
  newOwnerId: Scalars['String']['input']
  /** Whether to keep the old owner as an admin. Defaults to true. */
  stayAdmin?: InputMaybe<Scalars['Boolean']['input']>
}

export type TransferNetworkOwnershipInput = {
  newOwnerId: Scalars['String']['input']
}

export type TransferredOwnershipMetadata = {
  newOwner: ChatParticipant
  type: ChatLogType
}

export enum TranslationMarkupFormat {
  HTML = 'HTML',
  TEXT = 'TEXT',
}

export type TranslationMarkupInput = {
  format: TranslationMarkupFormat
  markup: Scalars['String']['input']
}

export enum UnauthorizedReason {
  ACCESS = 'ACCESS',
  PLAN = 'PLAN',
}

export type UnreadChatsCount = {
  /** The ID of the member requested the counts */
  memberId: Scalars['String']['output']
  /** The IDs of the chats which the member has received new messages in. */
  unreadChatIds: Array<Scalars['String']['output']>
  /** The number of chats which the member has received new messages in. */
  unreadChatsCount: Scalars['Int']['output']
}

export type UnreadMessageCountsPerChat = {
  counts: Array<UnreadMessagesCount>
}

export type UnreadMessagesCount = {
  /** The ID of the chat */
  chatId: Scalars['String']['output']
  /** Number of unread message in the chat for current user */
  count: Scalars['Int']['output']
  /** List of unread mentions in the chat for current user */
  unreadMentions: Array<MessageAddress>
}

export enum UnsubscribeTokenContext {
  ALL = 'ALL',
  MEMBER = 'MEMBER',
  MENTIONS = 'MENTIONS',
  POST = 'POST',
  REACTIONS = 'REACTIONS',
  SPACE = 'SPACE',
}

export type UnsubscribeWithTokenInput = {
  context: UnsubscribeTokenContext
  entityId?: InputMaybe<Scalars['String']['input']>
  token: Scalars['String']['input']
}

export type UpdateAccessGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>
  entityId?: InputMaybe<Scalars['ID']['input']>
  entityType?: InputMaybe<AccessGroupEntityType>
  info?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type UpdateAppCustomCodes = {
  body?: InputMaybe<Scalars['String']['input']>
  head?: InputMaybe<Scalars['String']['input']>
}

export type UpdateAppInput = {
  about?: InputMaybe<Scalars['String']['input']>
  authorName?: InputMaybe<Scalars['String']['input']>
  authorUrl?: InputMaybe<Scalars['String']['input']>
  bannerId?: InputMaybe<Scalars['String']['input']>
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>
  customCodes?: InputMaybe<UpdateAppCustomCodes>
  description?: InputMaybe<Scalars['String']['input']>
  docsUrl?: InputMaybe<Scalars['String']['input']>
  faviconId?: InputMaybe<Scalars['String']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  onFreePlan?: InputMaybe<Scalars['Boolean']['input']>
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>
  requiredPermissions?: InputMaybe<Array<PrimaryScopes>>
  slug?: InputMaybe<Scalars['String']['input']>
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>
  webhookSubscriptions?: InputMaybe<Array<Scalars['String']['input']>>
  webhookUrl?: InputMaybe<Scalars['String']['input']>
}

export type UpdateAppInstallationInput = {
  permissions?: InputMaybe<Array<PrimaryScopes>>
  templatesMappings?: InputMaybe<AppInstallationTemplatesMappingsInput>
}

/** Update the available search sources. posts are always enabled. */
export type UpdateAvailableSearchSourcesInput = {
  /** Setting to false disables searching on members. */
  members: Scalars['Boolean']['input']
  /** Setting to false disables searching on spaces. */
  spaces: Scalars['Boolean']['input']
}

export type UpdateBadgeInput = {
  active: Scalars['Boolean']['input']
  backgroundColor?: InputMaybe<Scalars['String']['input']>
  daysUntilExpired?: InputMaybe<Scalars['Float']['input']>
  imageId?: InputMaybe<Scalars['ID']['input']>
  longDescription?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  settings?: InputMaybe<Array<BadgeSettingsInput>>
  shortDescription: Scalars['String']['input']
  text?: InputMaybe<Scalars['String']['input']>
  textColor?: InputMaybe<Scalars['String']['input']>
}

export type UpdateBlockInput = {
  children?: InputMaybe<Scalars['String']['input']>
  extraProps?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  output?: InputMaybe<Scalars['String']['input']>
  props?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCollectionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UpdateCustomFieldSchemaInput = {
  default?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  externalKeys?: InputMaybe<Array<Scalars['String']['input']>>
  items?: InputMaybe<BaseCustomFieldSchemaInput>
  key: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  properties?: InputMaybe<Array<BaseCustomFieldSchemaInput>>
  readPrivacy?: InputMaybe<CustomFieldPrivacyInput>
  required?: InputMaybe<Scalars['Boolean']['input']>
  settings?: InputMaybe<Array<CustomFieldSettingsInput>>
  validators?: InputMaybe<Array<CustomFieldValidatorInput>>
  writePrivacy?: InputMaybe<CustomFieldPrivacyInput>
}

export type UpdateCustomSsoInput = {
  allowSignUp?: InputMaybe<Scalars['Boolean']['input']>
  authorizationUrl?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  clientId?: InputMaybe<Scalars['String']['input']>
  clientSecret?: InputMaybe<Scalars['String']['input']>
  idpUrl?: InputMaybe<Scalars['String']['input']>
  logoutUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<SsoProvider>
  scopes?: InputMaybe<Array<Scalars['String']['input']>>
  settingsUrl?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<SsoStatus>
  tokenUrl?: InputMaybe<Scalars['String']['input']>
  type: CustomSsoType
  userProfileUrl?: InputMaybe<Scalars['String']['input']>
}

export type UpdateFileInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateFooter = {
  urls: Array<UpdateFooterUrl>
}

export type UpdateFooterUrl = {
  title: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type UpdateGroupChatInput = {
  /** Image id of the group avatar */
  avatarId?: InputMaybe<Scalars['String']['input']>
  /** The new name of the group chat */
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateHighlightedTags = {
  highlightedTags: Array<CreateHighlightedTag>
}

export type UpdateImageInput = {
  cropHeight?: InputMaybe<Scalars['Int']['input']>
  cropWidth?: InputMaybe<Scalars['Int']['input']>
  cropX?: InputMaybe<Scalars['Int']['input']>
  cropY?: InputMaybe<Scalars['Int']['input']>
  cropZoom?: InputMaybe<Scalars['Float']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateJwtSsoInput = {
  authorizationUrl?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  logoutUrl?: InputMaybe<Scalars['String']['input']>
  settingsUrl?: InputMaybe<Scalars['String']['input']>
  signUpUrl?: InputMaybe<Scalars['String']['input']>
  status: SsoStatus
}

export type UpdateMediaNetworkSettingsInput = {
  alternateUploadDestination?: InputMaybe<Scalars['String']['input']>
  fileSizeLimit?: InputMaybe<Scalars['Float']['input']>
  fileTypesLimit?: InputMaybe<Array<Scalars['String']['input']>>
  imageSizeLimit?: InputMaybe<Scalars['Float']['input']>
  imageTypesLimit?: InputMaybe<Array<Scalars['String']['input']>>
}

export type UpdateMemberAttributesInput = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type UpdateMemberInput = {
  attributes?: InputMaybe<UpdateMemberAttributesInput>
  bannerId?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  currentPassword?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  fields?: InputMaybe<Array<CustomFieldInput>>
  flagged?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  newPassword?: InputMaybe<Scalars['String']['input']>
  profilePictureId?: InputMaybe<Scalars['String']['input']>
  roleId?: InputMaybe<Scalars['ID']['input']>
  settings?: InputMaybe<MemberSettingsInput>
  tagline?: InputMaybe<Scalars['String']['input']>
  timeZone?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UpdateMemberInvitationInput = {
  roleId: Scalars['ID']['input']
}

export type UpdateModerationItemInput = {
  changeStatusReason?: InputMaybe<Scalars['String']['input']>
  /** Operation mode when accepting a moderation report. Effects vary based on reported entity type (e.g. post removal, member suspension, etc.). */
  opMode?: InputMaybe<ModerationOpMode>
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>
  status: ModerationStatus
}

export type UpdateModerationSettingsInput = {
  akismet?: InputMaybe<Scalars['Boolean']['input']>
  blackListPostTypeIds?: InputMaybe<Array<Scalars['String']['input']>>
  blackListSpaceIds?: InputMaybe<Array<Scalars['String']['input']>>
  customBlacklist?: InputMaybe<Array<Scalars['String']['input']>>
  enableBlacklisting?: InputMaybe<Scalars['Boolean']['input']>
  member?: InputMaybe<ModerationMemberSettingsInput>
  oopSpam?: InputMaybe<Scalars['Boolean']['input']>
  preventPublish?: InputMaybe<Scalars['Boolean']['input']>
  useDefaultBlacklisting?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateNavigationItem = {
  link?: InputMaybe<Scalars['String']['input']>
  openInNewWindow?: InputMaybe<Scalars['Boolean']['input']>
  text: Scalars['String']['input']
  type: NavigationItemType
}

export type UpdateNetworkInput = {
  aliases?: InputMaybe<Array<Scalars['String']['input']>>
  billingEmail?: InputMaybe<Scalars['String']['input']>
  brandColor?: InputMaybe<Scalars['String']['input']>
  companyName?: InputMaybe<Scalars['String']['input']>
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>
  defaultSpaceIds?: InputMaybe<Array<Scalars['ID']['input']>>
  description?: InputMaybe<Scalars['String']['input']>
  domain?: InputMaybe<Scalars['String']['input']>
  entrancePage?: InputMaybe<Scalars['String']['input']>
  faviconId?: InputMaybe<Scalars['String']['input']>
  footer?: InputMaybe<UpdateFooter>
  gclid?: InputMaybe<Scalars['String']['input']>
  hideDefaultAuthenticationForm?: InputMaybe<Scalars['Boolean']['input']>
  imageIds?: InputMaybe<NetworkImagesInput>
  incidentEmails?: InputMaybe<Array<Scalars['String']['input']>>
  industry?: InputMaybe<NetworkIndustryType>
  landingPages?: InputMaybe<UpdateNetworkSettingsInput>
  locale?: InputMaybe<Scalars['String']['input']>
  logoId?: InputMaybe<Scalars['String']['input']>
  membership?: InputMaybe<NetworkMembership>
  name?: InputMaybe<Scalars['String']['input']>
  navigationSlates?: InputMaybe<NavigationSlateUpdatesInput>
  newDomain?: InputMaybe<Scalars['String']['input']>
  passwordComplexity?: InputMaybe<NetworkPasswordComplexity>
  primaryMembers?: InputMaybe<NetworkPrimaryMembersType>
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>
  referralLink?: InputMaybe<Scalars['String']['input']>
  referralProgramEnabled?: InputMaybe<Scalars['Boolean']['input']>
  referrer?: InputMaybe<Scalars['String']['input']>
  releaseChannel?: InputMaybe<NetworkReleaseChannelType>
  settings?: InputMaybe<NetworkSettingsInput>
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>
  themes?: InputMaybe<UpdateThemes>
  timeframe?: InputMaybe<NetworkTimeframeType>
  topNavigation?: InputMaybe<UpdateTopNavigation>
  tribeBranding?: InputMaybe<Scalars['Boolean']['input']>
  utmCampaign?: InputMaybe<Scalars['String']['input']>
  utmContent?: InputMaybe<Scalars['String']['input']>
  utmMedium?: InputMaybe<Scalars['String']['input']>
  utmSource?: InputMaybe<Scalars['String']['input']>
  utmTerm?: InputMaybe<Scalars['String']['input']>
  visibility?: InputMaybe<NetworkVisibility>
  whoCanInviteIds?: InputMaybe<Array<Scalars['String']['input']>>
}

export type UpdateNetworkSettingsInput = {
  landingPageForGuest?: InputMaybe<NetworkLandingPage>
  landingPageForMember?: InputMaybe<NetworkLandingPage>
  landingPageForNewMember?: InputMaybe<NetworkLandingPage>
}

export type UpdateNetworkStatusInput = {
  status: NetworkStatus
  statusLocked?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateNewDomainInput = {
  domain: Scalars['String']['input']
}

export type UpdateNotificationNetworkSettingsInput = {
  emailDigestEnabled?: InputMaybe<Scalars['Boolean']['input']>
  emailDigestLayoutId?: InputMaybe<Scalars['String']['input']>
  emailDigestRecentPostsFilter?: InputMaybe<EmailDigestRecentPostsFilterInput>
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>
  emailFrom?: InputMaybe<Scalars['String']['input']>
  emailNotificationEnabled?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateOidcInput = {
  /** The URL to the JWKS endpoint (jwks_uri). Takes precedence over JWT secret if provided. */
  jwksUri?: InputMaybe<Scalars['String']['input']>
  /** The secret used to sign the JWT. If jwksUri is provided, this will be ignored. */
  jwtSecret?: InputMaybe<Scalars['String']['input']>
  validIssuers?: InputMaybe<Array<Scalars['String']['input']>>
}

export type UpdatePasswordWithTokenInput = {
  newPassword: Scalars['String']['input']
  token: Scalars['String']['input']
}

export type UpdatePermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  scopes?: InputMaybe<Array<Scalars['String']['input']>>
}

export type UpdatePollInput = {
  /** The time when the poll closes for voting. Set to null to remove close date. */
  closesAt?: InputMaybe<Scalars['DateTime']['input']>
  /** The number of votes each participant can cast. */
  maxSelections?: InputMaybe<Scalars['Int']['input']>
  /** The time when the poll opens for voting. */
  opensAt?: InputMaybe<Scalars['DateTime']['input']>
  options?: InputMaybe<Array<PollOptionInput>>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePostInput = {
  attachmentIds?: InputMaybe<Array<Scalars['String']['input']>>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** The custom seo detail of this post */
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  /** Whether the post is locked */
  locked?: InputMaybe<Scalars['Boolean']['input']>
  mappingFields?: InputMaybe<Array<PostMappingFieldInput>>
  ownerId?: InputMaybe<Scalars['ID']['input']>
  /** The id of all the polls associated with this post. */
  pollIds?: InputMaybe<Array<Scalars['String']['input']>>
  /**
   * This will publish the post immediately. If false, the post will stay a draft. Will not unpublish an already published post.
   *       This is only usable by admins and moderators.
   */
  publish?: Scalars['Boolean']['input']
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /**
   * This will schedule the post to be published at the given date and time. This only applies to posts in draft status.
   *       This is only usable by admins and moderators.
   */
  scheduledFor?: InputMaybe<Scalars['DateTime']['input']>
  seoDetail?: InputMaybe<UpdatePostSeoDetailInput>
  /** The slug of the post creating the human readable part of its URL */
  slug?: InputMaybe<Scalars['String']['input']>
  tagNames?: InputMaybe<Array<Scalars['String']['input']>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type UpdatePostSeoDetailInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdatePostTypeInput = {
  allowedReactions?: InputMaybe<Array<Scalars['String']['input']>>
  customReactions?: InputMaybe<Array<CustomReactionInput>>
  description?: InputMaybe<Scalars['String']['input']>
  excludedNativeShortcuts?: InputMaybe<Array<Scalars['String']['input']>>
  forbiddenReactions?: InputMaybe<Array<Scalars['String']['input']>>
  iconId?: InputMaybe<Scalars['ID']['input']>
  languageTemplate?: InputMaybe<Scalars['String']['input']>
  layout?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  nativeFieldsTemplates?: InputMaybe<NativeFieldsTemplatesInput>
  pluralName?: InputMaybe<Scalars['String']['input']>
  postFields?: InputMaybe<CustomFieldsSchemaInput>
  primaryReactionType?: InputMaybe<ReactionType>
  recommendationsSettings?: InputMaybe<PostTypeRecommendationSettingsInput>
  selfRepliable?: InputMaybe<Scalars['Boolean']['input']>
  shortContentTemplate?: InputMaybe<Scalars['String']['input']>
  singleChoiceReactions?: InputMaybe<Array<Scalars['String']['input']>>
  slate?: InputMaybe<SlateUpdatesInput>
  titleTemplate?: InputMaybe<Scalars['String']['input']>
  validReplyTypesIds?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Input type for updating a publisher settings */
export type UpdatePublisherInput = {
  /** By enabling this, all implicit subscriptions will receive notifications from this publisher. If members subscribe/unsubscribe explicitly, they will receive/silent notifications regardless of this setting. */
  notifyImplicitSubscriptions: Scalars['Boolean']['input']
}

export type UpdateSearchNetworkSettingsInput = {
  askAiAvailability?: InputMaybe<AskAiAvailability>
  askAiEnabled?: InputMaybe<Scalars['Boolean']['input']>
  availableSearchSources?: InputMaybe<UpdateAvailableSearchSourcesInput>
  /** Space IDs for official resources that appears in a separate section at the top of search results and has higher priority in Ask AI feature */
  officialResourcesSpaceIds?: InputMaybe<Array<Scalars['String']['input']>>
}

export type UpdateSpaceInput = {
  address?: InputMaybe<SpaceAddressInput>
  bannerId?: InputMaybe<Scalars['String']['input']>
  collectionId?: InputMaybe<Scalars['ID']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  customSeoDetail?: InputMaybe<CustomSeoDetailInput>
  description?: InputMaybe<Scalars['String']['input']>
  externalId?: InputMaybe<Scalars['String']['input']>
  externalUrl?: InputMaybe<Scalars['String']['input']>
  hidden?: InputMaybe<Scalars['Boolean']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  inviteOnly?: InputMaybe<Scalars['Boolean']['input']>
  layout?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  nonAdminsCanInvite?: InputMaybe<Scalars['Boolean']['input']>
  private?: InputMaybe<Scalars['Boolean']['input']>
  seoDetail?: InputMaybe<UpdateSpaceSeoDetailInput>
  slate?: InputMaybe<SlateUpdatesInput>
  slug?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<SpaceType>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  whoCanPost?: InputMaybe<Array<Scalars['ID']['input']>>
  whoCanReact?: InputMaybe<Array<Scalars['ID']['input']>>
  whoCanReply?: InputMaybe<Array<Scalars['ID']['input']>>
  withRoles?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateSpaceMemberRoleInput = {
  roleId: Scalars['String']['input']
}

export type UpdateSpacePostTypeInput = {
  postTypeId: Scalars['ID']['input']
  whoCanPost?: InputMaybe<Array<Scalars['ID']['input']>>
  whoCanReact?: InputMaybe<Array<Scalars['ID']['input']>>
  whoCanReply?: InputMaybe<Array<Scalars['ID']['input']>>
}

export type UpdateSpaceSeoDetailInput = {
  description?: InputMaybe<Scalars['String']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateSubscriberInput = {
  emailDigestEnabled?: InputMaybe<Scalars['Boolean']['input']>
  emailDigestSendFrequency?: InputMaybe<EmailDigestFrequency>
  emailDigestWeeklySendDay?: InputMaybe<DayOfWeek>
  /** If enabled, the subscriber will receive email notifications. */
  emailSubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>
  /** For each FCM devices token, the subscriber will receive push notifications. */
  fcmDeviceTokens?: InputMaybe<Array<Scalars['String']['input']>>
  /** Array of instant email triggers that the subscriber will receive. Similar to notification triggers, these can include various events that prompt an immediate email. If this array is empty, the subscriber will not receive any instant emails. */
  instantEmailTriggers?: InputMaybe<Array<NotificationTrigger>>
  /** If enabled, the subscriber will receive emails if they are mentioned in a post or reply. */
  mentionEmailEnabled?: InputMaybe<Scalars['Boolean']['input']>
  /** If enabled, the subscriber will receive notifications if they are mentioned in a post or reply. */
  mentionSubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>
  /** If enabled, the subscriber will receive emails if they receive a message. */
  messageEmailEnabled?: InputMaybe<Scalars['Boolean']['input']>
  /** Array of notification triggers that the subscriber will receive. If this array is empty, the subscriber will not receive any notifications. */
  notificationTriggers?: InputMaybe<Array<NotificationTrigger>>
  /** If enabled, the subscriber will receive emails if someone reacts to their post or reply. */
  reactionEmailEnabled?: InputMaybe<Scalars['Boolean']['input']>
  /** If enabled, the subscriber will receive notifications if someone reacts to their post or reply. */
  reactionSubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateTagInput = {
  description?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateTemplateInput = {
  about?: InputMaybe<Scalars['String']['input']>
  appIds?: InputMaybe<Array<Scalars['String']['input']>>
  authorName?: InputMaybe<Scalars['String']['input']>
  authorUrl?: InputMaybe<Scalars['String']['input']>
  bannerId?: InputMaybe<Scalars['String']['input']>
  categories?: InputMaybe<Array<Scalars['String']['input']>>
  comingSoon?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  entityProperties?: InputMaybe<Scalars['String']['input']>
  faviconId?: InputMaybe<Scalars['String']['input']>
  hubContentId?: InputMaybe<Scalars['String']['input']>
  imageId?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  onFreePlan?: InputMaybe<Scalars['Boolean']['input']>
  previewHtml?: InputMaybe<Scalars['String']['input']>
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>
  slate?: InputMaybe<SlateUpdatesInput>
  slug?: InputMaybe<Scalars['String']['input']>
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>
}

export type UpdateTheme = {
  name: Scalars['String']['input']
  status: ThemeStatus
  tokens: UpdateThemeTokens
}

export type UpdateThemeColor = {
  key: Scalars['String']['input']
  weights: Array<UpdateThemeToken>
}

export type UpdateThemeColorToken = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type UpdateThemeColorTokens = {
  dark?: InputMaybe<Array<UpdateThemeColorToken>>
  light?: InputMaybe<Array<UpdateThemeColorToken>>
}

export type UpdateThemeColors = {
  dark?: InputMaybe<Array<UpdateThemeColor>>
  light?: InputMaybe<Array<UpdateThemeColor>>
}

export type UpdateThemeToken = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type UpdateThemeTokens = {
  breakpoints?: InputMaybe<Array<UpdateThemeToken>>
  colors?: InputMaybe<Array<UpdateThemeToken>>
  fontSizes?: InputMaybe<Array<UpdateThemeToken>>
  fontWeights?: InputMaybe<Array<UpdateThemeToken>>
  opacity?: InputMaybe<Array<UpdateThemeToken>>
  shadows?: InputMaybe<Array<UpdateThemeToken>>
  sizes?: InputMaybe<Array<UpdateThemeToken>>
  textStyles?: InputMaybe<Array<UpdateThemeToken>>
  zIndices?: InputMaybe<Array<UpdateThemeToken>>
}

export type UpdateThemes = {
  active: UpdateTheme
  drafts: Array<UpdateTheme>
  published: Array<UpdateTheme>
}

export type UpdateTopNavigation = {
  alignment: TopNavigationAlignment
  enabled: Scalars['Boolean']['input']
  items: Array<UpdateNavigationItem>
}

export type UploadedMigrations = {
  migrationId: Scalars['String']['output']
  results: Array<MigrationFileResult>
}

export type UpsertExtraPropertyInput = {
  entityId?: InputMaybe<Scalars['String']['input']>
  entityType: ExtraPropertyEntityType
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type UpsertPageCustomResponse = {
  body?: InputMaybe<Scalars['String']['input']>
  headers?: InputMaybe<Array<PageCustomResponseHeaderInput>>
  httpCode: Scalars['Int']['input']
}

export type UpsertTheme = {
  active?: InputMaybe<Scalars['Boolean']['input']>
  colorTokens?: InputMaybe<UpdateThemeColorTokens>
  colors?: InputMaybe<UpdateThemeColors>
  id: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  typography?: InputMaybe<Array<UpdateThemeToken>>
}

export type UsernameAvailability = {
  available: Scalars['Boolean']['output']
}

export type ValuePermissions = {
  isAuthorized: IsAuthorized
  value: Scalars['String']['output']
}

/** ValuesCountInput class is used to filter fields of type array. It allows specifying conditions based on the count of values in the array. */
export type ValuesCountInput = {
  /** Greater than condition for the count of values in the array */
  gt?: InputMaybe<Scalars['Float']['input']>
  /** Greater than or equal condition for the count of values in the array */
  gte?: InputMaybe<Scalars['Float']['input']>
  /** Less than condition for the count of values in the array */
  lt?: InputMaybe<Scalars['Float']['input']>
  /** Less than or equal condition for the count of values in the array */
  lte?: InputMaybe<Scalars['Float']['input']>
}

export type VerifyMemberInput = {
  memberId: Scalars['String']['input']
  verificationCode?: InputMaybe<Scalars['String']['input']>
}

export type Vote = {
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  memberId: Scalars['String']['output']
  networkId: Scalars['String']['output']
  pollId: Scalars['String']['output']
  selectionIds: Array<Scalars['Int']['output']>
  updatedAt: Scalars['String']['output']
}

export type VoteInput = {
  /** The ID of the poll to vote on */
  pollId: Scalars['String']['input']
  /** The IDs of the selected options */
  selectionIds: Array<Scalars['Int']['input']>
  /** JWT vote token that authorizes this vote */
  voteToken: Scalars['String']['input']
}

export type XFrameEmbeddingSettings = {
  /** Only used if status is enabledForSpecificDomains */
  allowedDomains?: Maybe<Array<Scalars['String']['output']>>
  status: XFrameEmbeddingStatus
}

export type XFrameEmbeddingSettingsInput = {
  /** Only used if status is enabledForSpecificDomains */
  allowedDomains?: InputMaybe<Array<Scalars['String']['input']>>
  status: XFrameEmbeddingStatus
}

export enum XFrameEmbeddingStatus {
  disabled = 'disabled',
  enabledForAll = 'enabledForAll',
  enabledForSpecificDomains = 'enabledForSpecificDomains',
}

export type BadgeFieldsFragment = {
  active: boolean
  backgroundColor?: string | null
  id: string
  networkId: string
  name: string
  text?: string | null
  textColor?: string | null
  type: BadgeType
  shortDescription: string
  settings?: Array<{ key: string; value: string }> | null
  image?:
    | { text: string }
    | { id: string; text: string; variant: GlyphMediaVariant }
    | {
        id: string
        url: string
        width?: number | null
        height?: number | null
        dominantColorHex?: string | null
        urls?: {
          thumb: string
          small: string
          medium: string
          large: string
          full: string
        } | null
      }
    | {}
    | null
}

export type NonRecursiveBaseCustomFieldFieldsFragment = {
  key: string
  archived?: boolean | null
  description?: string | null
  externalKeys?: Array<string> | null
  name: string
  required?: boolean | null
  type: CustomFieldType
  typeOptions?: {
    dateType?: DateTypeOptions | null
    numberType?: NumberTypeOptions | null
    relationType?: RelationTypeOptions | null
    richTextType?: RichTextTypeOptions | null
    textType?: TextTypeOptions | null
  } | null
  validators?: Array<{
    customErrorMessage?: string | null
    validation: CustomFieldValidators
    value: string
  }> | null
}

export type BaseCustomFieldFieldsFragment = {
  key: string
  archived?: boolean | null
  description?: string | null
  externalKeys?: Array<string> | null
  name: string
  required?: boolean | null
  type: CustomFieldType
  items?: {
    key: string
    archived?: boolean | null
    description?: string | null
    externalKeys?: Array<string> | null
    name: string
    required?: boolean | null
    type: CustomFieldType
    typeOptions?: {
      dateType?: DateTypeOptions | null
      numberType?: NumberTypeOptions | null
      relationType?: RelationTypeOptions | null
      richTextType?: RichTextTypeOptions | null
      textType?: TextTypeOptions | null
    } | null
    validators?: Array<{
      customErrorMessage?: string | null
      validation: CustomFieldValidators
      value: string
    }> | null
  } | null
  properties?: Array<{
    key: string
    archived?: boolean | null
    description?: string | null
    externalKeys?: Array<string> | null
    name: string
    required?: boolean | null
    type: CustomFieldType
    items?: {
      key: string
      archived?: boolean | null
      description?: string | null
      externalKeys?: Array<string> | null
      name: string
      required?: boolean | null
      type: CustomFieldType
      typeOptions?: {
        dateType?: DateTypeOptions | null
        numberType?: NumberTypeOptions | null
        relationType?: RelationTypeOptions | null
        richTextType?: RichTextTypeOptions | null
        textType?: TextTypeOptions | null
      } | null
      validators?: Array<{
        customErrorMessage?: string | null
        validation: CustomFieldValidators
        value: string
      }> | null
    } | null
    typeOptions?: {
      dateType?: DateTypeOptions | null
      numberType?: NumberTypeOptions | null
      relationType?: RelationTypeOptions | null
      richTextType?: RichTextTypeOptions | null
      textType?: TextTypeOptions | null
    } | null
    validators?: Array<{
      customErrorMessage?: string | null
      validation: CustomFieldValidators
      value: string
    }> | null
  }> | null
  typeOptions?: {
    dateType?: DateTypeOptions | null
    numberType?: NumberTypeOptions | null
    relationType?: RelationTypeOptions | null
    richTextType?: RichTextTypeOptions | null
    textType?: TextTypeOptions | null
  } | null
  validators?: Array<{
    customErrorMessage?: string | null
    validation: CustomFieldValidators
    value: string
  }> | null
}

export type CustomFieldsSchemaFieldsFragment = {
  fields: Array<{
    key: string
    name: string
    archived?: boolean | null
    required?: boolean | null
    searchable?: boolean | null
    type: CustomFieldType
    default?: string | null
    description?: string | null
    externalKeys?: Array<string> | null
    settings?: Array<{ key: string; value: string }> | null
    typeOptions?: {
      dateType?: DateTypeOptions | null
      numberType?: NumberTypeOptions | null
      relationType?: RelationTypeOptions | null
      richTextType?: RichTextTypeOptions | null
      textType?: TextTypeOptions | null
    } | null
    validators?: Array<{
      customErrorMessage?: string | null
      validation: CustomFieldValidators
      value: string
    }> | null
    writePrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
    readPrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
    items?: {
      key: string
      archived?: boolean | null
      description?: string | null
      externalKeys?: Array<string> | null
      name: string
      required?: boolean | null
      type: CustomFieldType
      items?: {
        key: string
        archived?: boolean | null
        description?: string | null
        externalKeys?: Array<string> | null
        name: string
        required?: boolean | null
        type: CustomFieldType
        typeOptions?: {
          dateType?: DateTypeOptions | null
          numberType?: NumberTypeOptions | null
          relationType?: RelationTypeOptions | null
          richTextType?: RichTextTypeOptions | null
          textType?: TextTypeOptions | null
        } | null
        validators?: Array<{
          customErrorMessage?: string | null
          validation: CustomFieldValidators
          value: string
        }> | null
      } | null
      properties?: Array<{
        key: string
        archived?: boolean | null
        description?: string | null
        externalKeys?: Array<string> | null
        name: string
        required?: boolean | null
        type: CustomFieldType
        items?: {
          key: string
          archived?: boolean | null
          description?: string | null
          externalKeys?: Array<string> | null
          name: string
          required?: boolean | null
          type: CustomFieldType
          typeOptions?: {
            dateType?: DateTypeOptions | null
            numberType?: NumberTypeOptions | null
            relationType?: RelationTypeOptions | null
            richTextType?: RichTextTypeOptions | null
            textType?: TextTypeOptions | null
          } | null
          validators?: Array<{
            customErrorMessage?: string | null
            validation: CustomFieldValidators
            value: string
          }> | null
        } | null
        typeOptions?: {
          dateType?: DateTypeOptions | null
          numberType?: NumberTypeOptions | null
          relationType?: RelationTypeOptions | null
          richTextType?: RichTextTypeOptions | null
          textType?: TextTypeOptions | null
        } | null
        validators?: Array<{
          customErrorMessage?: string | null
          validation: CustomFieldValidators
          value: string
        }> | null
      }> | null
      typeOptions?: {
        dateType?: DateTypeOptions | null
        numberType?: NumberTypeOptions | null
        relationType?: RelationTypeOptions | null
        richTextType?: RichTextTypeOptions | null
        textType?: TextTypeOptions | null
      } | null
      validators?: Array<{
        customErrorMessage?: string | null
        validation: CustomFieldValidators
        value: string
      }> | null
    } | null
  }>
}

export type CustomSeoDetailFieldsFragment = {
  title?: string | null
  description?: string | null
  noIndex?: boolean | null
  thumbnail?:
    | {
        id: string
        url: string
        width?: number | null
        height?: number | null
        dominantColorHex?: string | null
        urls?: {
          thumb: string
          small: string
          medium: string
          large: string
          full: string
        } | null
      }
    | {}
    | null
}

export type EmojiFieldsFragment = { text: string }

export type FileFieldsFragment = {
  downloadUrl: string
  extension: string
  id: string
  name?: string | null
  size?: number | null
  status?: MediaStatus | null
  url: string
}

export type GlyphFieldsFragment = {
  id: string
  text: string
  variant: GlyphMediaVariant
}

export type ImageFieldsFragment = {
  id: string
  url: string
  width?: number | null
  height?: number | null
  dominantColorHex?: string | null
  urls?: {
    thumb: string
    small: string
    medium: string
    large: string
    full: string
  } | null
}

export type MemberBadgeFieldsFragment = {
  backgroundColor?: string | null
  badgeId: string
  text?: string | null
  textColor?: string | null
  type: BadgeType
  shortDescription: string
  image?:
    | { text: string }
    | { id: string; text: string; variant: GlyphMediaVariant }
    | {
        id: string
        url: string
        width?: number | null
        height?: number | null
        dominantColorHex?: string | null
        urls?: {
          thumb: string
          small: string
          medium: string
          large: string
          full: string
        } | null
      }
    | {}
    | null
  badge?: {
    active: boolean
    backgroundColor?: string | null
    id: string
    networkId: string
    name: string
    text?: string | null
    textColor?: string | null
    type: BadgeType
    shortDescription: string
    settings?: Array<{ key: string; value: string }> | null
    image?:
      | { text: string }
      | { id: string; text: string; variant: GlyphMediaVariant }
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  } | null
}

export type PageFieldsFragment = {
  space: {
    id: string
    slug: string
    name: string
    description?: string | null
    type: SpaceType
    layout: string
    private?: boolean | null
    groupId?: string | null
    hidden?: boolean | null
    inviteOnly?: boolean | null
    nonAdminsCanInvite?: boolean | null
    customOrderingIndexInGroup: number
    relativeUrl?: string | null
    url?: string | null
    networkId: string
    isHomepage?: boolean | null
    membersCount: number
    postsCount?: number | null
    createdById: string
    createdAt: string
    updatedAt: string
    whoCanPost?: Array<string> | null
    whoCanReact?: Array<string> | null
    whoCanReply?: Array<string> | null
    address: { path: string; exact: boolean }
    customSeoDetail?: {
      title?: string | null
      description?: string | null
      noIndex?: boolean | null
      thumbnail?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    } | null
    slate?: {
      rootBlock: string
      blocks: Array<{
        id: string
        name: string
        children?: string | null
        extraProps?: string | null
        output?: string | null
        props?: string | null
      }>
      restrictions?: {
        nonEditableBlocks?: Array<string> | null
        lockedChildrenBlocks?: Array<string> | null
        nonRemovableBlocks?: Array<string> | null
      } | null
    } | null
    banner?:
      | { text: string }
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    image?:
      | { text: string }
      | { id: string; text: string; variant: GlyphMediaVariant }
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    highlightedTags?: Array<{
      description?: string | null
      id: string
      slug: string
      title: string
    }> | null
    collection?: {
      id: string
      slug: string
      name: string
      description?: string | null
      createdAt: string
      relativeUrl?: string | null
      url?: string | null
    } | null
    authMemberProps?: {
      context: PermissionContext
      membershipStatus?: SpaceMembershipStatus | null
      subscribed?: boolean | null
      scopes?: Array<string> | null
      availablePostTypes?: Array<{ id: string; name: string }> | null
      permissions?: Array<{
        name: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
        inputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
        outputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
      }> | null
    } | null
  }
  seoDetail: {
    title: string
    description?: string | null
    jsonld?: string | null
    additionalMeta?: Array<{
      type: PageSeoTagType
      properties: Array<{ key: string; value?: string | null }>
    }> | null
  }
}

export type PostFieldsFragment = {
  key: string
  value?: string | null
  relationEntities?: {
    medias: Array<
      | { text: string }
      | {
          downloadUrl: string
          extension: string
          id: string
          name?: string | null
          size?: number | null
          status?: MediaStatus | null
          url: string
        }
      | { id: string; text: string; variant: GlyphMediaVariant }
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
    >
    members: Array<{
      bannerId?: string | null
      blockedMemberIds?: Array<string> | null
      createdAt: string
      displayName?: string | null
      email?: string | null
      emailStatus?: MemberEmailStatus | null
      externalId?: string | null
      externalUrl?: string | null
      flagged: boolean
      id: string
      lastSeen?: string | null
      lastSeenAt?: string | null
      locale: string
      name?: string | null
      networkId: string
      newEmail?: string | null
      overrideTeammate?: boolean | null
      profilePictureId?: string | null
      relativeUrl?: string | null
      roleId: string
      score?: number | null
      staffReasons?: Array<StaffReason> | null
      status: MemberStatus
      subscribersCount?: number | null
      tagline?: string | null
      teammate: boolean
      timeZone?: string | null
      updatedAt: string
      url?: string | null
      username: string
      verifiedAt?: string | null
      profilePicture?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    }>
    posts: Array<{
      allowedEmojis?: Array<string> | null
      allowedReactions?: Array<string> | null
      attachmentIds: Array<string>
      createdAt: string
      createdById: string
      description?: string | null
      embedIds: Array<string>
      externalId?: string | null
      externalUrl?: string | null
      followersCount?: number | null
      forbiddenEmojis?: Array<string> | null
      forbiddenReactions?: Array<string> | null
      hasMoreContent: boolean
      id: string
      imageIds: Array<string>
      isAnonymous: boolean
      isHidden?: boolean | null
      language?: string | null
      lastActivityAt?: string | null
      locked: boolean
      mentionedMembers: Array<string>
      negativeReactions?: Array<string> | null
      negativeReactionsCount?: number | null
      networkId: string
      ownerId: string
      pinnedInto: Array<PinnedInto>
      positiveReactions?: Array<string> | null
      positiveReactionsCount?: number | null
      postTypeId: string
      primaryReactionType?: ReactionType | null
      publishedAt?: string | null
      reactionsCount: number
      relativeUrl?: string | null
      repliedToId?: string | null
      repliedToIds?: Array<string> | null
      repliesCount: number
      shortContent?: string | null
      singleChoiceReactions?: Array<string> | null
      slug?: string | null
      spaceId: string
      status: PostStatus
      subscribersCount?: number | null
      tagIds?: Array<string> | null
      textContent?: string | null
      thumbnailId?: string | null
      title?: string | null
      topicIds?: Array<string> | null
      totalRepliesCount: number
      updatedAt: string
      url?: string | null
    }>
    spaces: Array<{
      bannerId?: string | null
      createdAt: string
      createdById: string
      customOrderingIndexInGroup: number
      description?: string | null
      externalId?: string | null
      externalUrl?: string | null
      groupId?: string | null
      hidden?: boolean | null
      highlightedTagIds: Array<string>
      id: string
      imageId?: string | null
      inviteOnly?: boolean | null
      isHomepage?: boolean | null
      isNewUserHomepage?: boolean | null
      isReturningUserHomepage?: boolean | null
      key: string
      layout: string
      membersCount: number
      name: string
      networkId: string
      nonAdminsCanInvite?: boolean | null
      postsCount?: number | null
      private?: boolean | null
      relativeUrl?: string | null
      slug: string
      subscribersCount?: number | null
      type: SpaceType
      updatedAt: string
      url?: string | null
      whoCanPost?: Array<string> | null
      whoCanReact?: Array<string> | null
      whoCanReply?: Array<string> | null
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    }>
    tags: Array<{
      description?: string | null
      id: string
      slug: string
      spaceId?: string | null
      title: string
    }>
  } | null
}

export type PostTypeFieldsFragment = {
  id: string
  archived: boolean
  name: string
  pluralName: string
  context: PostTypeContext
  createdAt: string
  slug: string
  allowedReactions?: Array<string> | null
  layout: string
  primaryReactionType?: ReactionType | null
  singleChoiceReactions?: Array<string> | null
  updatedAt: string
  customReactions?: Array<{
    activeColor?: string | null
    activeGlyphId?: string | null
    activeName?: string | null
    color?: string | null
    glyphId: string
    key: string
    name: string
  }> | null
  slate: {
    rootBlock: string
    blocks: Array<{
      id: string
      name: string
      children?: string | null
      extraProps?: string | null
      output?: string | null
      props?: string | null
    }>
    restrictions?: {
      nonEditableBlocks?: Array<string> | null
      lockedChildrenBlocks?: Array<string> | null
      nonRemovableBlocks?: Array<string> | null
    } | null
  }
  authMemberProps?: {
    context: PermissionContext
    scopes?: Array<string> | null
    availableSpaces?: Array<{
      id: string
      name: string
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    }> | null
  } | null
  postFields?: {
    fields: Array<{
      key: string
      name: string
      archived?: boolean | null
      required?: boolean | null
      searchable?: boolean | null
      type: CustomFieldType
      default?: string | null
      description?: string | null
      externalKeys?: Array<string> | null
      settings?: Array<{ key: string; value: string }> | null
      typeOptions?: {
        dateType?: DateTypeOptions | null
        numberType?: NumberTypeOptions | null
        relationType?: RelationTypeOptions | null
        richTextType?: RichTextTypeOptions | null
        textType?: TextTypeOptions | null
      } | null
      validators?: Array<{
        customErrorMessage?: string | null
        validation: CustomFieldValidators
        value: string
      }> | null
      writePrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
      readPrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
      items?: {
        key: string
        archived?: boolean | null
        description?: string | null
        externalKeys?: Array<string> | null
        name: string
        required?: boolean | null
        type: CustomFieldType
        items?: {
          key: string
          archived?: boolean | null
          description?: string | null
          externalKeys?: Array<string> | null
          name: string
          required?: boolean | null
          type: CustomFieldType
          typeOptions?: {
            dateType?: DateTypeOptions | null
            numberType?: NumberTypeOptions | null
            relationType?: RelationTypeOptions | null
            richTextType?: RichTextTypeOptions | null
            textType?: TextTypeOptions | null
          } | null
          validators?: Array<{
            customErrorMessage?: string | null
            validation: CustomFieldValidators
            value: string
          }> | null
        } | null
        properties?: Array<{
          key: string
          archived?: boolean | null
          description?: string | null
          externalKeys?: Array<string> | null
          name: string
          required?: boolean | null
          type: CustomFieldType
          items?: {
            key: string
            archived?: boolean | null
            description?: string | null
            externalKeys?: Array<string> | null
            name: string
            required?: boolean | null
            type: CustomFieldType
            typeOptions?: {
              dateType?: DateTypeOptions | null
              numberType?: NumberTypeOptions | null
              relationType?: RelationTypeOptions | null
              richTextType?: RichTextTypeOptions | null
              textType?: TextTypeOptions | null
            } | null
            validators?: Array<{
              customErrorMessage?: string | null
              validation: CustomFieldValidators
              value: string
            }> | null
          } | null
          typeOptions?: {
            dateType?: DateTypeOptions | null
            numberType?: NumberTypeOptions | null
            relationType?: RelationTypeOptions | null
            richTextType?: RichTextTypeOptions | null
            textType?: TextTypeOptions | null
          } | null
          validators?: Array<{
            customErrorMessage?: string | null
            validation: CustomFieldValidators
            value: string
          }> | null
        }> | null
        typeOptions?: {
          dateType?: DateTypeOptions | null
          numberType?: NumberTypeOptions | null
          relationType?: RelationTypeOptions | null
          richTextType?: RichTextTypeOptions | null
          textType?: TextTypeOptions | null
        } | null
        validators?: Array<{
          customErrorMessage?: string | null
          validation: CustomFieldValidators
          value: string
        }> | null
      } | null
    }>
  } | null
  validReplyTypes?: Array<{ id: string }> | null
  icon?:
    | { text: string }
    | { id: string; text: string; variant: GlyphMediaVariant }
    | {
        id: string
        url: string
        width?: number | null
        height?: number | null
        dominantColorHex?: string | null
        urls?: {
          thumb: string
          small: string
          medium: string
          large: string
          full: string
        } | null
      }
    | {}
    | null
}

export type SlateFieldsFragment = {
  rootBlock: string
  blocks: Array<{
    id: string
    name: string
    children?: string | null
    extraProps?: string | null
    output?: string | null
    props?: string | null
  }>
  restrictions?: {
    nonEditableBlocks?: Array<string> | null
    lockedChildrenBlocks?: Array<string> | null
    nonRemovableBlocks?: Array<string> | null
  } | null
}

export type SpaceFieldsFragment = {
  id: string
  slug: string
  name: string
  description?: string | null
  type: SpaceType
  layout: string
  private?: boolean | null
  groupId?: string | null
  hidden?: boolean | null
  inviteOnly?: boolean | null
  nonAdminsCanInvite?: boolean | null
  customOrderingIndexInGroup: number
  relativeUrl?: string | null
  url?: string | null
  networkId: string
  isHomepage?: boolean | null
  membersCount: number
  postsCount?: number | null
  createdById: string
  createdAt: string
  updatedAt: string
  whoCanPost?: Array<string> | null
  whoCanReact?: Array<string> | null
  whoCanReply?: Array<string> | null
  address: { path: string; exact: boolean }
  customSeoDetail?: {
    title?: string | null
    description?: string | null
    noIndex?: boolean | null
    thumbnail?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  } | null
  slate?: {
    rootBlock: string
    blocks: Array<{
      id: string
      name: string
      children?: string | null
      extraProps?: string | null
      output?: string | null
      props?: string | null
    }>
    restrictions?: {
      nonEditableBlocks?: Array<string> | null
      lockedChildrenBlocks?: Array<string> | null
      nonRemovableBlocks?: Array<string> | null
    } | null
  } | null
  banner?:
    | { text: string }
    | {
        id: string
        url: string
        width?: number | null
        height?: number | null
        dominantColorHex?: string | null
        urls?: {
          thumb: string
          small: string
          medium: string
          large: string
          full: string
        } | null
      }
    | {}
    | null
  image?:
    | { text: string }
    | { id: string; text: string; variant: GlyphMediaVariant }
    | {
        id: string
        url: string
        width?: number | null
        height?: number | null
        dominantColorHex?: string | null
        urls?: {
          thumb: string
          small: string
          medium: string
          large: string
          full: string
        } | null
      }
    | {}
    | null
  highlightedTags?: Array<{
    description?: string | null
    id: string
    slug: string
    title: string
  }> | null
  collection?: {
    id: string
    slug: string
    name: string
    description?: string | null
    createdAt: string
    relativeUrl?: string | null
    url?: string | null
  } | null
  authMemberProps?: {
    context: PermissionContext
    membershipStatus?: SpaceMembershipStatus | null
    subscribed?: boolean | null
    scopes?: Array<string> | null
    availablePostTypes?: Array<{ id: string; name: string }> | null
    permissions?: Array<{
      name: string
      isAuthorized: { authorized: boolean; reason?: UnauthorizedReason | null }
      inputPermissions: Array<{
        path: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
      }>
      outputPermissions: Array<{
        path: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
      }>
    }> | null
  } | null
}

export type AskSubscriptionVariables = Exact<{
  q: Scalars['String']['input']
}>

export type AskSubscription = { ask: string }

export type HomepageQueryVariables = Exact<{
  type?: InputMaybe<HomeSpaceType>
}>

export type HomepageQuery = {
  homepage?: {
    space: { isHomepage?: boolean | null; address: { path: string } }
  } | null
}

export type SsosAuthQueryVariables = Exact<{
  status?: InputMaybe<SsoStatus>
}>

export type SsosAuthQuery = {
  ssos: Array<{
    type: SsoType
    authorizationUrl?: string | null
    signUpUrl?: string | null
    name?: string | null
  }>
}

export type SsoUrlQueryVariables = Exact<{
  input: SsoUrlInput
}>

export type SsoUrlQuery = { ssoUrl: { url: string } }

export type AuthMemberQueryVariables = Exact<{ [key: string]: never }>

export type AuthMemberQuery = {
  authMember: {
    name?: string | null
    id: string
    locale: string
    status: MemberStatus
    username: string
    email?: string | null
    emailStatus?: MemberEmailStatus | null
    newEmail?: string | null
    tagline?: string | null
    lastSeenAt?: string | null
    createdAt: string
    updatedAt: string
    relativeUrl?: string | null
    url?: string | null
    externalId?: string | null
    roleId: string
    flagged: boolean
    teammate: boolean
    staffReasons?: Array<StaffReason> | null
    timeZone?: string | null
    profilePicture?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    banner?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    role?: {
      id: string
      name: string
      type?: RoleType | null
      description?: string | null
      visible: boolean
    } | null
    authMemberProps?: {
      canSendPrivateMessages?: boolean | null
      context: PermissionContext
      scopes?: Array<string> | null
      subscribed?: boolean | null
      permissions?: Array<{
        name: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
        inputPermissions: Array<{
          path: string
          values: Array<{
            value: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
          }>
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
        outputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
      }> | null
    } | null
    badges?: Array<{
      backgroundColor?: string | null
      badgeId: string
      text?: string | null
      textColor?: string | null
      type: BadgeType
      shortDescription: string
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      badge?: {
        active: boolean
        backgroundColor?: string | null
        id: string
        networkId: string
        name: string
        text?: string | null
        textColor?: string | null
        type: BadgeType
        shortDescription: string
        settings?: Array<{ key: string; value: string }> | null
        image?:
          | { text: string }
          | { id: string; text: string; variant: GlyphMediaVariant }
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
      } | null
    }> | null
    fields?: Array<{ key: string; value?: string | null }> | null
    extraProperties?: Array<{ key: string; value: string }> | null
    settings?: {
      privateMessaging?: {
        privateMessagingEnabled?: boolean | null
        whoCanContactMember?: PrivateMessagingIncomingContact | null
        quickEnter?: boolean | null
      } | null
    } | null
  }
}

export type NetworkSsoDataQueryVariables = Exact<{ [key: string]: never }>

export type NetworkSsoDataQuery = {
  network: { hideDefaultAuthenticationForm: boolean }
}

export type SsosRedirectQueryVariables = Exact<{
  status?: InputMaybe<SsoStatus>
}>

export type SsosRedirectQuery = {
  ssos: Array<{
    type: SsoType
    name?: string | null
    authorizationUrl?: string | null
    signUpUrl?: string | null
    tokenUrl?: string | null
    buttonText?: string | null
  }>
}

export type ConfirmResetPasswordMutationVariables = Exact<{
  input: ConfirmResetPasswordInput
}>

export type ConfirmResetPasswordMutation = {
  confirmResetPassword: { status: ActionStatus }
}

export type AuthMemberContactQueryVariables = Exact<{ [key: string]: never }>

export type AuthMemberContactQuery = {
  authMember: { id: string; email?: string | null; networkId: string }
}

export type AuthMemberIntercomQueryVariables = Exact<{ [key: string]: never }>

export type AuthMemberIntercomQuery = {
  authMember: {
    createdAt: string
    email?: string | null
    role?: { type?: RoleType | null } | null
  }
}

export type JwtTokenQueryVariables = Exact<{
  networkDomain?: InputMaybe<Scalars['String']['input']>
  ssoToken?: InputMaybe<Scalars['String']['input']>
}>

export type JwtTokenQuery = {
  tokens: {
    accessToken: string
    refreshToken: string
    member: { createdAt: string }
  }
}

export type JwtAuthTokenQueryVariables = Exact<{
  networkDomain?: InputMaybe<Scalars['String']['input']>
  ssoToken?: InputMaybe<Scalars['String']['input']>
}>

export type JwtAuthTokenQuery = {
  tokens: {
    accessToken: string
    refreshToken: string
    member: { createdAt: string }
  }
}

export type LoginNetworkMutationVariables = Exact<{
  input: LoginNetworkWithPasswordInput
}>

export type LoginNetworkMutation = {
  loginNetwork: { accessToken: string; refreshToken: string }
}

export type LogoutNetworkMutationVariables = Exact<{
  input?: InputMaybe<LogoutNetworkInput>
}>

export type LogoutNetworkMutation = { logoutNetwork: { status: ActionStatus } }

export type NetworkLogoutUrlQueryVariables = Exact<{ [key: string]: never }>

export type NetworkLogoutUrlQuery = {
  network: { activeSso?: { logoutUrl?: string | null } | null }
}

export type NetworkManifestDataQueryVariables = Exact<{ [key: string]: never }>

export type NetworkManifestDataQuery = {
  network: {
    description?: string | null
    themes?: {
      active: {
        tokens: { colors?: Array<{ key: string; value: string }> | null }
      }
    } | null
    activeTheme?: {
      colors?: {
        light?: Array<{
          key: string
          weights: Array<{ key: string; value: string }>
        }> | null
        dark?: Array<{
          key: string
          weights: Array<{ key: string; value: string }>
        }> | null
      } | null
      typography?: Array<{ key: string; value: string }> | null
    } | null
    images?: {
      darkFavicon?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      darkMobileLogo?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      lightFavicon?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      lightMobileLogo?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    } | null
    favicon?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    logo?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type UpsertThemeMutationVariables = Exact<{
  input: UpsertTheme
}>

export type UpsertThemeMutation = { upsertTheme: { id: string } }

export type NetworkBasicDataQueryVariables = Exact<{
  networkDomain?: InputMaybe<Scalars['String']['input']>
  refreshToken?: InputMaybe<Scalars['String']['input']>
}>

export type NetworkBasicDataQuery = {
  tokens: {
    accessToken: string
    refreshToken: string
    networkPublicInfo: {
      id: string
      status: NetworkStatus
      visibility: NetworkVisibility
      domain: string
      domainSubfolder?: string | null
      name: string
    }
  }
}

export type NetworkBasicPublicInfoQueryVariables = Exact<{
  [key: string]: never
}>

export type NetworkBasicPublicInfoQuery = {
  networkPublicInfo: {
    id: string
    status: NetworkStatus
    visibility: NetworkVisibility
    domain: string
    domainSubfolder?: string | null
    name: string
  }
}

export type NetworkIdQueryVariables = Exact<{ [key: string]: never }>

export type NetworkIdQuery = { network: { id: string } }

export type OAuthTokensQueryVariables = Exact<{
  input: OAuthTokenInput
}>

export type OAuthTokensQuery = {
  oAuthTokens: {
    accessToken: string
    refreshToken: string
    memberId: string
    expiresIn: number
  }
}

export type OtpTokenQueryVariables = Exact<{
  networkDomain?: InputMaybe<Scalars['String']['input']>
  otp?: InputMaybe<Scalars['String']['input']>
}>

export type OtpTokenQuery = {
  tokens: {
    accessToken: string
    refreshToken: string
    networkPublicInfo: { domain: string; domainSubfolder?: string | null }
  }
}

export type NetworkFeedRssDataQueryVariables = Exact<{ [key: string]: never }>

export type NetworkFeedRssDataQuery = {
  network: {
    description?: string | null
    locale: string
    favicon?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    logo?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type GetRssFeedQueryVariables = Exact<{
  limit: Scalars['Int']['input']
}>

export type GetRssFeedQuery = {
  feed: {
    nodes?: Array<{
      id: string
      slug?: string | null
      title?: string | null
      shortContent?: string | null
      createdAt: string
      fields?: Array<{ key: string; value?: string | null }> | null
      tags?: Array<{ title: string }> | null
      space?: { slug: string } | null
      owner?: { member?: { name?: string | null } | null } | null
    }> | null
  }
}

export type NetworkMemberPostsRssDataQueryVariables = Exact<{
  [key: string]: never
}>

export type NetworkMemberPostsRssDataQuery = {
  network: {
    description?: string | null
    locale: string
    favicon?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    logo?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type RssGetMemberPostsQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  memberId: Scalars['ID']['input']
}>

export type RssGetMemberPostsQuery = {
  memberPosts: {
    nodes?: Array<{
      id: string
      slug?: string | null
      title?: string | null
      shortContent?: string | null
      createdAt: string
      fields?: Array<{ key: string; value?: string | null }> | null
      tags?: Array<{ title: string }> | null
      owner?: { member?: { name?: string | null } | null } | null
      space?: { slug: string } | null
    }> | null
  }
}

export type NetworkPostRepliesRssDataQueryVariables = Exact<{
  [key: string]: never
}>

export type NetworkPostRepliesRssDataQuery = {
  network: {
    description?: string | null
    locale: string
    favicon?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    logo?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type RssGetRepliesQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  postId: Scalars['ID']['input']
}>

export type RssGetRepliesQuery = {
  replies: {
    nodes?: Array<{
      id: string
      slug?: string | null
      title?: string | null
      shortContent?: string | null
      createdAt: string
      fields?: Array<{ key: string; value?: string | null }> | null
      tags?: Array<{ title: string }> | null
      owner?: { member?: { name?: string | null } | null } | null
      space?: { slug: string } | null
    }> | null
  }
}

export type NetworkSpacePostsRssDataQueryVariables = Exact<{
  [key: string]: never
}>

export type NetworkSpacePostsRssDataQuery = {
  network: {
    description?: string | null
    locale: string
    favicon?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    logo?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type GetRssSpacePostsQueryVariables = Exact<{
  spaceIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
  limit: Scalars['Int']['input']
}>

export type GetRssSpacePostsQuery = {
  posts: {
    nodes?: Array<{
      id: string
      slug?: string | null
      title?: string | null
      shortContent?: string | null
      createdAt: string
      fields?: Array<{ key: string; value?: string | null }> | null
      tags?: Array<{ title: string }> | null
      owner?: { member?: { name?: string | null } | null } | null
    }> | null
  }
}

export type RssGetMemberQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
}>

export type RssGetMemberQuery = {
  member: {
    id: string
    name?: string | null
    tagline?: string | null
    profilePicture?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type RssGetPostQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type RssGetPostQuery = {
  post: { id: string; title?: string | null; shortContent?: string | null }
}

export type RssGetSpaceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['ID']['input']>
}>

export type RssGetSpaceQuery = {
  space: {
    id: string
    slug: string
    name: string
    description?: string | null
    image?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type LoginWithSamlMutationVariables = Exact<{
  input: LoginWithSamlResponseInput
}>

export type LoginWithSamlMutation = {
  loginWithSamlResponse: {
    accessToken: string
    refreshToken: string
    member: { createdAt: string }
  }
}

export type JoinNetworkWithInvitationLinkMutationVariables = Exact<{
  input: JoinNetworkWithLinkInput
}>

export type JoinNetworkWithInvitationLinkMutation = {
  joinNetworkWithInvitationLink: { accessToken: string; refreshToken: string }
}

export type JoinNetworkWithTokenMutationVariables = Exact<{
  input: JoinNetworkWithTokenInput
}>

export type JoinNetworkWithTokenMutation = {
  joinNetworkWithToken: { accessToken: string; refreshToken: string }
}

export type JoinNetworkMutationVariables = Exact<{
  input: JoinNetworkInput
}>

export type JoinNetworkMutation = {
  joinNetwork: { accessToken: string; refreshToken: string }
}

export type SitemapQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spacePath?: InputMaybe<Scalars['ID']['input']>
}>

export type SitemapQuery = {
  sitemap: {
    pageInfo: { endCursor?: string | null; hasNextPage: boolean }
    nodes?: Array<{ id: string; lastModifiedAt: string; url: string }> | null
  }
}

export type PostsSitemapQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spacePath?: InputMaybe<Scalars['ID']['input']>
}>

export type PostsSitemapQuery = {
  sitemap: {
    pageInfo: { endCursor?: string | null; hasNextPage: boolean }
    nodes?: Array<{ id: string; lastModifiedAt: string; url: string }> | null
  }
}

export type SpacesSitemapQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>
  limit: Scalars['Int']['input']
  reverse?: InputMaybe<Scalars['Boolean']['input']>
  spacePath?: InputMaybe<Scalars['ID']['input']>
}>

export type SpacesSitemapQuery = {
  sitemap: {
    pageInfo: { endCursor?: string | null; hasNextPage: boolean }
    nodes?: Array<{ id: string; lastModifiedAt: string; url: string }> | null
  }
}

export type SsosTokenQueryVariables = Exact<{
  networkDomain?: InputMaybe<Scalars['String']['input']>
}>

export type SsosTokenQuery = {
  tokens: {
    networkPublicInfo: { domain: string; domainSubfolder?: string | null }
  }
}

export type LoginWithSsoCodeMutationVariables = Exact<{
  input: LoginWithSsoCodeInput
}>

export type LoginWithSsoCodeMutation = {
  loginWithSsoCode: {
    accessToken: string
    refreshToken: string
    member: { createdAt: string }
  }
}

export type InvitationLinkSsrDataQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type InvitationLinkSsrDataQuery = {
  invitationLinkValidity: { id: string; link: string; createdAt: string }
}

export type InvitationTokenSsrDataQueryVariables = Exact<{
  token: Scalars['String']['input']
}>

export type InvitationTokenSsrDataQuery = {
  memberInvitationValidity: {
    createdAt: string
    expiresAt: string
    id: string
    invitationMessage?: string | null
    inviteeEmail: string
    inviteeId?: string | null
    inviteeName?: string | null
    inviterId?: string | null
    joinedAt?: string | null
    networkId: string
    roleId: string
    status: MemberInvitationStatus
  }
}

export type MemberSsrDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
}>

export type MemberSsrDataQuery = {
  member: {
    displayName?: string | null
    name?: string | null
    id: string
    locale: string
    profilePictureId?: string | null
    bannerId?: string | null
    status: MemberStatus
    username: string
    email?: string | null
    emailStatus?: MemberEmailStatus | null
    newEmail?: string | null
    tagline?: string | null
    lastSeenAt?: string | null
    createdAt: string
    updatedAt: string
    relativeUrl?: string | null
    url?: string | null
    externalId?: string | null
    roleId: string
    flagged: boolean
    teammate: boolean
    staffReasons?: Array<StaffReason> | null
    role?: {
      id: string
      name: string
      type?: RoleType | null
      description?: string | null
      visible: boolean
    } | null
    banner?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    profilePicture?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    authMemberProps?: {
      context: PermissionContext
      scopes?: Array<string> | null
      canSendPrivateMessages?: boolean | null
      subscribed?: boolean | null
      permissions?: Array<{
        name: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
        inputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
        outputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
      }> | null
    } | null
    badges?: Array<{
      backgroundColor?: string | null
      badgeId: string
      text?: string | null
      textColor?: string | null
      type: BadgeType
      shortDescription: string
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      badge?: {
        active: boolean
        backgroundColor?: string | null
        id: string
        networkId: string
        name: string
        text?: string | null
        textColor?: string | null
        type: BadgeType
        shortDescription: string
        settings?: Array<{ key: string; value: string }> | null
        image?:
          | { text: string }
          | { id: string; text: string; variant: GlyphMediaVariant }
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
      } | null
    }> | null
    fields?: Array<{ key: string; value?: string | null }> | null
  }
}

export type NetworkSsrDataQueryVariables = Exact<{ [key: string]: never }>

export type NetworkSsrDataQuery = {
  network: {
    organizationId?: string | null
    description?: string | null
    membership: NetworkMembership
    locale: string
    availableLocales: Array<string>
    createdAt: string
    newDomain?: string | null
    brandColor?: string | null
    status: NetworkStatus
    passwordComplexity: NetworkPasswordComplexity
    hideDefaultAuthenticationForm: boolean
    termsOfServiceUrl?: string | null
    privacyPolicyUrl?: string | null
    tribeBranding: boolean
    referralProgramEnabled: boolean
    referralLink?: string | null
    whoCanInviteIds: Array<string>
    willUnpublishAt?: string | null
    activeSso?: {
      logoutUrl?: string | null
      settingsUrl?: string | null
    } | null
    settings?: {
      emailEnabled: boolean
      emailFrom?: string | null
      emailNotificationEnabled: boolean
      fileSizeLimit: number
      fileTypesLimit: Array<string>
      imageSizeLimit: number
      imageTypesLimit: Array<string>
      emailDigestLayoutId: string
      emailDigestEnabled: boolean
      contentTranslation?: { enabled: boolean } | null
      memberPermissions?: { canDeleteAccount: boolean } | null
      privateMessaging?: {
        privateMessagingEnabled: boolean
        whoCanMembersContact?: PrivateMessagingOutgoingContact | null
        whoCanCreateGroups?: GroupChatCreationPermission | null
      } | null
      captcha?: {
        enabled: boolean
        siteKey?: string | null
        secretKey?: string | null
      } | null
      emailDigestRecentPostsFilter: {
        filterOption: EmailDigestRecentPostsFilterOption
        spaceIds: Array<string>
      }
      xFrameEmbedding?: {
        status: XFrameEmbeddingStatus
        allowedDomains?: Array<string> | null
      } | null
    } | null
    navigationSlates: {
      headerDisabled?: boolean | null
      sidebar1Disabled?: boolean | null
      header: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      }
      sidebar1: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      }
    }
    activeTheme?: {
      id: string
      name?: string | null
      colors?: {
        light?: Array<{
          key: string
          weights: Array<{ key: string; value: string }>
        }> | null
        dark?: Array<{
          key: string
          weights: Array<{ key: string; value: string }>
        }> | null
      } | null
      typography?: Array<{ key: string; value: string }> | null
    } | null
    themes?: {
      active: {
        name: string
        status: ThemeStatus
        tokens: { colors?: Array<{ key: string; value: string }> | null }
      }
    } | null
    roles?: Array<{
      id: string
      name: string
      type?: RoleType | null
      description?: string | null
      visible: boolean
      scopes: Array<string>
    }> | null
    authMemberProps?: {
      context: PermissionContext
      scopes?: Array<string> | null
      permissions?: Array<{
        name: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
        inputPermissions: Array<{
          path: string
          values: Array<{
            value: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
          }>
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
        outputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
      }> | null
    } | null
    systemSpaces?: Array<{
      id: string
      networkId: string
      name: string
      description?: string | null
      slug: string
      type: SpaceType
      layout: string
      isHomepage?: boolean | null
      createdById: string
      groupId?: string | null
      membersCount: number
      createdAt: string
      updatedAt: string
      private?: boolean | null
      hidden?: boolean | null
      inviteOnly?: boolean | null
      nonAdminsCanInvite?: boolean | null
      customOrderingIndexInGroup: number
      whoCanPost?: Array<string> | null
      whoCanReact?: Array<string> | null
      whoCanReply?: Array<string> | null
      relativeUrl?: string | null
      url?: string | null
      address: { path: string; exact: boolean }
      slate?: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      } | null
      customSeoDetail?: {
        title?: string | null
        description?: string | null
        noIndex?: boolean | null
        thumbnail?:
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
      } | null
    }> | null
    memberFields?: {
      fields: Array<{
        key: string
        name: string
        archived?: boolean | null
        required?: boolean | null
        searchable?: boolean | null
        type: CustomFieldType
        default?: string | null
        description?: string | null
        externalKeys?: Array<string> | null
        settings?: Array<{ key: string; value: string }> | null
        typeOptions?: {
          dateType?: DateTypeOptions | null
          numberType?: NumberTypeOptions | null
          relationType?: RelationTypeOptions | null
          richTextType?: RichTextTypeOptions | null
          textType?: TextTypeOptions | null
        } | null
        validators?: Array<{
          customErrorMessage?: string | null
          validation: CustomFieldValidators
          value: string
        }> | null
        writePrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
        readPrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
        items?: {
          key: string
          archived?: boolean | null
          description?: string | null
          externalKeys?: Array<string> | null
          name: string
          required?: boolean | null
          type: CustomFieldType
          items?: {
            key: string
            archived?: boolean | null
            description?: string | null
            externalKeys?: Array<string> | null
            name: string
            required?: boolean | null
            type: CustomFieldType
            typeOptions?: {
              dateType?: DateTypeOptions | null
              numberType?: NumberTypeOptions | null
              relationType?: RelationTypeOptions | null
              richTextType?: RichTextTypeOptions | null
              textType?: TextTypeOptions | null
            } | null
            validators?: Array<{
              customErrorMessage?: string | null
              validation: CustomFieldValidators
              value: string
            }> | null
          } | null
          properties?: Array<{
            key: string
            archived?: boolean | null
            description?: string | null
            externalKeys?: Array<string> | null
            name: string
            required?: boolean | null
            type: CustomFieldType
            items?: {
              key: string
              archived?: boolean | null
              description?: string | null
              externalKeys?: Array<string> | null
              name: string
              required?: boolean | null
              type: CustomFieldType
              typeOptions?: {
                dateType?: DateTypeOptions | null
                numberType?: NumberTypeOptions | null
                relationType?: RelationTypeOptions | null
                richTextType?: RichTextTypeOptions | null
                textType?: TextTypeOptions | null
              } | null
              validators?: Array<{
                customErrorMessage?: string | null
                validation: CustomFieldValidators
                value: string
              }> | null
            } | null
            typeOptions?: {
              dateType?: DateTypeOptions | null
              numberType?: NumberTypeOptions | null
              relationType?: RelationTypeOptions | null
              richTextType?: RichTextTypeOptions | null
              textType?: TextTypeOptions | null
            } | null
            validators?: Array<{
              customErrorMessage?: string | null
              validation: CustomFieldValidators
              value: string
            }> | null
          }> | null
          typeOptions?: {
            dateType?: DateTypeOptions | null
            numberType?: NumberTypeOptions | null
            relationType?: RelationTypeOptions | null
            richTextType?: RichTextTypeOptions | null
            textType?: TextTypeOptions | null
          } | null
          validators?: Array<{
            customErrorMessage?: string | null
            validation: CustomFieldValidators
            value: string
          }> | null
        } | null
      }>
    } | null
    customSeoDetail?: {
      title?: string | null
      description?: string | null
      noIndex?: boolean | null
      thumbnail?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    } | null
    extraProperties?: Array<{ key: string; value: string }> | null
    postTypes?: Array<{
      id: string
      archived: boolean
      name: string
      pluralName: string
      context: PostTypeContext
      createdAt: string
      slug: string
      allowedReactions?: Array<string> | null
      layout: string
      primaryReactionType?: ReactionType | null
      singleChoiceReactions?: Array<string> | null
      updatedAt: string
      customReactions?: Array<{
        activeColor?: string | null
        activeGlyphId?: string | null
        activeName?: string | null
        color?: string | null
        glyphId: string
        key: string
        name: string
      }> | null
      slate: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      }
      authMemberProps?: {
        context: PermissionContext
        scopes?: Array<string> | null
        availableSpaces?: Array<{
          id: string
          name: string
          image?:
            | { text: string }
            | { id: string; text: string; variant: GlyphMediaVariant }
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
        }> | null
      } | null
      postFields?: {
        fields: Array<{
          key: string
          name: string
          archived?: boolean | null
          required?: boolean | null
          searchable?: boolean | null
          type: CustomFieldType
          default?: string | null
          description?: string | null
          externalKeys?: Array<string> | null
          settings?: Array<{ key: string; value: string }> | null
          typeOptions?: {
            dateType?: DateTypeOptions | null
            numberType?: NumberTypeOptions | null
            relationType?: RelationTypeOptions | null
            richTextType?: RichTextTypeOptions | null
            textType?: TextTypeOptions | null
          } | null
          validators?: Array<{
            customErrorMessage?: string | null
            validation: CustomFieldValidators
            value: string
          }> | null
          writePrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
          readPrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
          items?: {
            key: string
            archived?: boolean | null
            description?: string | null
            externalKeys?: Array<string> | null
            name: string
            required?: boolean | null
            type: CustomFieldType
            items?: {
              key: string
              archived?: boolean | null
              description?: string | null
              externalKeys?: Array<string> | null
              name: string
              required?: boolean | null
              type: CustomFieldType
              typeOptions?: {
                dateType?: DateTypeOptions | null
                numberType?: NumberTypeOptions | null
                relationType?: RelationTypeOptions | null
                richTextType?: RichTextTypeOptions | null
                textType?: TextTypeOptions | null
              } | null
              validators?: Array<{
                customErrorMessage?: string | null
                validation: CustomFieldValidators
                value: string
              }> | null
            } | null
            properties?: Array<{
              key: string
              archived?: boolean | null
              description?: string | null
              externalKeys?: Array<string> | null
              name: string
              required?: boolean | null
              type: CustomFieldType
              items?: {
                key: string
                archived?: boolean | null
                description?: string | null
                externalKeys?: Array<string> | null
                name: string
                required?: boolean | null
                type: CustomFieldType
                typeOptions?: {
                  dateType?: DateTypeOptions | null
                  numberType?: NumberTypeOptions | null
                  relationType?: RelationTypeOptions | null
                  richTextType?: RichTextTypeOptions | null
                  textType?: TextTypeOptions | null
                } | null
                validators?: Array<{
                  customErrorMessage?: string | null
                  validation: CustomFieldValidators
                  value: string
                }> | null
              } | null
              typeOptions?: {
                dateType?: DateTypeOptions | null
                numberType?: NumberTypeOptions | null
                relationType?: RelationTypeOptions | null
                richTextType?: RichTextTypeOptions | null
                textType?: TextTypeOptions | null
              } | null
              validators?: Array<{
                customErrorMessage?: string | null
                validation: CustomFieldValidators
                value: string
              }> | null
            }> | null
            typeOptions?: {
              dateType?: DateTypeOptions | null
              numberType?: NumberTypeOptions | null
              relationType?: RelationTypeOptions | null
              richTextType?: RichTextTypeOptions | null
              textType?: TextTypeOptions | null
            } | null
            validators?: Array<{
              customErrorMessage?: string | null
              validation: CustomFieldValidators
              value: string
            }> | null
          } | null
        }>
      } | null
      validReplyTypes?: Array<{ id: string }> | null
      icon?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    }> | null
    customCodes?: Array<{
      code: string
      position: CustomCodePosition
      isCmpProvider?: boolean | null
    }> | null
    images?: {
      darkFavicon?:
        | { text: string }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      lightFavicon?:
        | { text: string }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      lightMobileLogo?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      darkMobileLogo?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      lightLogo?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      darkLogo?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    } | null
    favicon?:
      | { text: string }
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    badges?: Array<{
      active: boolean
      backgroundColor?: string | null
      id: string
      networkId: string
      name: string
      text?: string | null
      textColor?: string | null
      type: BadgeType
      shortDescription: string
      settings?: Array<{ key: string; value: string }> | null
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    }> | null
    logo?:
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
  }
}

export type PageDataQueryVariables = Exact<{
  path: Scalars['String']['input']
}>

export type PageDataQuery = {
  page: {
    space: {
      id: string
      slug: string
      name: string
      description?: string | null
      type: SpaceType
      layout: string
      private?: boolean | null
      groupId?: string | null
      hidden?: boolean | null
      inviteOnly?: boolean | null
      nonAdminsCanInvite?: boolean | null
      customOrderingIndexInGroup: number
      relativeUrl?: string | null
      url?: string | null
      networkId: string
      isHomepage?: boolean | null
      membersCount: number
      postsCount?: number | null
      createdById: string
      createdAt: string
      updatedAt: string
      whoCanPost?: Array<string> | null
      whoCanReact?: Array<string> | null
      whoCanReply?: Array<string> | null
      address: { path: string; exact: boolean }
      customSeoDetail?: {
        title?: string | null
        description?: string | null
        noIndex?: boolean | null
        thumbnail?:
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
      } | null
      slate?: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      } | null
      banner?:
        | { text: string }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      highlightedTags?: Array<{
        description?: string | null
        id: string
        slug: string
        title: string
      }> | null
      collection?: {
        id: string
        slug: string
        name: string
        description?: string | null
        createdAt: string
        relativeUrl?: string | null
        url?: string | null
      } | null
      authMemberProps?: {
        context: PermissionContext
        membershipStatus?: SpaceMembershipStatus | null
        subscribed?: boolean | null
        scopes?: Array<string> | null
        availablePostTypes?: Array<{ id: string; name: string }> | null
        permissions?: Array<{
          name: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
          inputPermissions: Array<{
            path: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
          }>
          outputPermissions: Array<{
            path: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
          }>
        }> | null
      } | null
    }
    seoDetail: {
      title: string
      description?: string | null
      jsonld?: string | null
      additionalMeta?: Array<{
        type: PageSeoTagType
        properties: Array<{ key: string; value?: string | null }>
      }> | null
    }
  }
}

export type PostSsrDataQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type PostSsrDataQuery = {
  post: {
    id: string
    slug?: string | null
    subscribersCount?: number | null
    postTypeId: string
    reactionsCount: number
    hasMoreContent: boolean
    isAnonymous: boolean
    isHidden?: boolean | null
    shortContent?: string | null
    createdAt: string
    publishedAt?: string | null
    ownerId: string
    createdById: string
    status: PostStatus
    spaceId: string
    imageIds: Array<string>
    pinnedInto: Array<PinnedInto>
    repliesCount: number
    totalRepliesCount: number
    locked: boolean
    repliedToIds?: Array<string> | null
    repliedToId?: string | null
    title?: string | null
    description?: string | null
    embedIds: Array<string>
    mentionedMembers: Array<string>
    primaryReactionType?: ReactionType | null
    lastActivityAt?: string | null
    language?: string | null
    relativeUrl?: string | null
    url?: string | null
    mappingFields?: Array<{
      key: string
      type: PostMappingTypeEnum
      value: string
    }> | null
    fields?: Array<{
      key: string
      value?: string | null
      relationEntities?: {
        medias: Array<
          | { text: string }
          | {
              downloadUrl: string
              extension: string
              id: string
              name?: string | null
              size?: number | null
              status?: MediaStatus | null
              url: string
            }
          | { id: string; text: string; variant: GlyphMediaVariant }
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
        >
        members: Array<{
          bannerId?: string | null
          blockedMemberIds?: Array<string> | null
          createdAt: string
          displayName?: string | null
          email?: string | null
          emailStatus?: MemberEmailStatus | null
          externalId?: string | null
          externalUrl?: string | null
          flagged: boolean
          id: string
          lastSeen?: string | null
          lastSeenAt?: string | null
          locale: string
          name?: string | null
          networkId: string
          newEmail?: string | null
          overrideTeammate?: boolean | null
          profilePictureId?: string | null
          relativeUrl?: string | null
          roleId: string
          score?: number | null
          staffReasons?: Array<StaffReason> | null
          status: MemberStatus
          subscribersCount?: number | null
          tagline?: string | null
          teammate: boolean
          timeZone?: string | null
          updatedAt: string
          url?: string | null
          username: string
          verifiedAt?: string | null
          profilePicture?:
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
        }>
        posts: Array<{
          allowedEmojis?: Array<string> | null
          allowedReactions?: Array<string> | null
          attachmentIds: Array<string>
          createdAt: string
          createdById: string
          description?: string | null
          embedIds: Array<string>
          externalId?: string | null
          externalUrl?: string | null
          followersCount?: number | null
          forbiddenEmojis?: Array<string> | null
          forbiddenReactions?: Array<string> | null
          hasMoreContent: boolean
          id: string
          imageIds: Array<string>
          isAnonymous: boolean
          isHidden?: boolean | null
          language?: string | null
          lastActivityAt?: string | null
          locked: boolean
          mentionedMembers: Array<string>
          negativeReactions?: Array<string> | null
          negativeReactionsCount?: number | null
          networkId: string
          ownerId: string
          pinnedInto: Array<PinnedInto>
          positiveReactions?: Array<string> | null
          positiveReactionsCount?: number | null
          postTypeId: string
          primaryReactionType?: ReactionType | null
          publishedAt?: string | null
          reactionsCount: number
          relativeUrl?: string | null
          repliedToId?: string | null
          repliedToIds?: Array<string> | null
          repliesCount: number
          shortContent?: string | null
          singleChoiceReactions?: Array<string> | null
          slug?: string | null
          spaceId: string
          status: PostStatus
          subscribersCount?: number | null
          tagIds?: Array<string> | null
          textContent?: string | null
          thumbnailId?: string | null
          title?: string | null
          topicIds?: Array<string> | null
          totalRepliesCount: number
          updatedAt: string
          url?: string | null
        }>
        spaces: Array<{
          bannerId?: string | null
          createdAt: string
          createdById: string
          customOrderingIndexInGroup: number
          description?: string | null
          externalId?: string | null
          externalUrl?: string | null
          groupId?: string | null
          hidden?: boolean | null
          highlightedTagIds: Array<string>
          id: string
          imageId?: string | null
          inviteOnly?: boolean | null
          isHomepage?: boolean | null
          isNewUserHomepage?: boolean | null
          isReturningUserHomepage?: boolean | null
          key: string
          layout: string
          membersCount: number
          name: string
          networkId: string
          nonAdminsCanInvite?: boolean | null
          postsCount?: number | null
          private?: boolean | null
          relativeUrl?: string | null
          slug: string
          subscribersCount?: number | null
          type: SpaceType
          updatedAt: string
          url?: string | null
          whoCanPost?: Array<string> | null
          whoCanReact?: Array<string> | null
          whoCanReply?: Array<string> | null
          image?:
            | { text: string }
            | { id: string; text: string; variant: GlyphMediaVariant }
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
        }>
        tags: Array<{
          description?: string | null
          id: string
          slug: string
          spaceId?: string | null
          title: string
        }>
      } | null
    }> | null
    thumbnail?:
      | { text: string }
      | { id: string; text: string; variant: GlyphMediaVariant }
      | {
          id: string
          url: string
          width?: number | null
          height?: number | null
          dominantColorHex?: string | null
          urls?: {
            thumb: string
            small: string
            medium: string
            large: string
            full: string
          } | null
        }
      | {}
      | null
    customSeoDetail?: {
      title?: string | null
      description?: string | null
      noIndex?: boolean | null
      thumbnail?:
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    } | null
    attachments?: Array<{
      extension: string
      id: string
      name?: string | null
      size?: number | null
      url: string
      downloadUrl: string
    }> | null
    polls?: Array<{
      closesAt?: string | null
      createdAt: string
      createdById: string
      deletedAt?: string | null
      id: string
      isDraft: boolean
      maxSelections: number
      networkId: string
      opensAt: string
      parentEntityId?: string | null
      parentEntityType: PollEntityType
      status: PollStatus
      title: string
      totalParticipants?: number | null
      totalVoteCasts?: number | null
      updatedAt: string
      voteToken?: string | null
      options: Array<{
        id: number
        label: string
        result?: { voteCastShare: number; voteCount: number } | null
      }>
      usersVote?: {
        createdAt: string
        id: string
        memberId: string
        networkId: string
        pollId: string
        selectionIds: Array<number>
        updatedAt: string
      } | null
    }> | null
    authMemberProps?: {
      context: PermissionContext
      scopes?: Array<string> | null
      subscribed?: boolean | null
      canReact?: boolean | null
      permissions?: Array<{
        name: string
        isAuthorized: {
          authorized: boolean
          reason?: UnauthorizedReason | null
        }
        inputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
        outputPermissions: Array<{
          path: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
        }>
      }> | null
      availableReplyTypes?: Array<{
        archived: boolean
        allowedEmojis?: Array<string> | null
        context: PostTypeContext
        createdAt: string
        forbiddenEmojis?: Array<string> | null
        id: string
        languageTemplate?: string | null
        name: string
        description?: string | null
        negativeReactions?: Array<string> | null
        pluralName: string
        positiveReactions?: Array<string> | null
        primaryReactionType?: ReactionType | null
        shortContentTemplate?: string | null
        singleChoiceReactions?: Array<string> | null
        allowedReactions?: Array<string> | null
        slug: string
        titleTemplate?: string | null
        updatedAt: string
        nativeFieldsTemplates?: {
          description?: string | null
          thumbnailId?: string | null
          title?: string | null
        } | null
        customReactions?: Array<{
          activeColor?: string | null
          activeGlyphId?: string | null
          activeName?: string | null
          color?: string | null
          glyphId: string
          key: string
          name: string
        }> | null
        mappings?: Array<{
          key: string
          field?: PostFieldsEnum | null
          type: PostMappingTypeEnum
          title?: string | null
          description?: string | null
          required?: boolean | null
          isMainContent?: boolean | null
          isSearchable?: boolean | null
          default?: string | null
        }> | null
      }> | null
    } | null
    postType?: {
      id: string
      archived: boolean
      name: string
      pluralName: string
      context: PostTypeContext
      createdAt: string
      slug: string
      allowedReactions?: Array<string> | null
      layout: string
      primaryReactionType?: ReactionType | null
      singleChoiceReactions?: Array<string> | null
      updatedAt: string
      customReactions?: Array<{
        activeColor?: string | null
        activeGlyphId?: string | null
        activeName?: string | null
        color?: string | null
        glyphId: string
        key: string
        name: string
      }> | null
      slate: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      }
      authMemberProps?: {
        context: PermissionContext
        scopes?: Array<string> | null
        availableSpaces?: Array<{
          id: string
          name: string
          image?:
            | { text: string }
            | { id: string; text: string; variant: GlyphMediaVariant }
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
        }> | null
      } | null
      postFields?: {
        fields: Array<{
          key: string
          name: string
          archived?: boolean | null
          required?: boolean | null
          searchable?: boolean | null
          type: CustomFieldType
          default?: string | null
          description?: string | null
          externalKeys?: Array<string> | null
          settings?: Array<{ key: string; value: string }> | null
          typeOptions?: {
            dateType?: DateTypeOptions | null
            numberType?: NumberTypeOptions | null
            relationType?: RelationTypeOptions | null
            richTextType?: RichTextTypeOptions | null
            textType?: TextTypeOptions | null
          } | null
          validators?: Array<{
            customErrorMessage?: string | null
            validation: CustomFieldValidators
            value: string
          }> | null
          writePrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
          readPrivacy?: { allow: Array<CustomFieldPrivacyOptions> } | null
          items?: {
            key: string
            archived?: boolean | null
            description?: string | null
            externalKeys?: Array<string> | null
            name: string
            required?: boolean | null
            type: CustomFieldType
            items?: {
              key: string
              archived?: boolean | null
              description?: string | null
              externalKeys?: Array<string> | null
              name: string
              required?: boolean | null
              type: CustomFieldType
              typeOptions?: {
                dateType?: DateTypeOptions | null
                numberType?: NumberTypeOptions | null
                relationType?: RelationTypeOptions | null
                richTextType?: RichTextTypeOptions | null
                textType?: TextTypeOptions | null
              } | null
              validators?: Array<{
                customErrorMessage?: string | null
                validation: CustomFieldValidators
                value: string
              }> | null
            } | null
            properties?: Array<{
              key: string
              archived?: boolean | null
              description?: string | null
              externalKeys?: Array<string> | null
              name: string
              required?: boolean | null
              type: CustomFieldType
              items?: {
                key: string
                archived?: boolean | null
                description?: string | null
                externalKeys?: Array<string> | null
                name: string
                required?: boolean | null
                type: CustomFieldType
                typeOptions?: {
                  dateType?: DateTypeOptions | null
                  numberType?: NumberTypeOptions | null
                  relationType?: RelationTypeOptions | null
                  richTextType?: RichTextTypeOptions | null
                  textType?: TextTypeOptions | null
                } | null
                validators?: Array<{
                  customErrorMessage?: string | null
                  validation: CustomFieldValidators
                  value: string
                }> | null
              } | null
              typeOptions?: {
                dateType?: DateTypeOptions | null
                numberType?: NumberTypeOptions | null
                relationType?: RelationTypeOptions | null
                richTextType?: RichTextTypeOptions | null
                textType?: TextTypeOptions | null
              } | null
              validators?: Array<{
                customErrorMessage?: string | null
                validation: CustomFieldValidators
                value: string
              }> | null
            }> | null
            typeOptions?: {
              dateType?: DateTypeOptions | null
              numberType?: NumberTypeOptions | null
              relationType?: RelationTypeOptions | null
              richTextType?: RichTextTypeOptions | null
              textType?: TextTypeOptions | null
            } | null
            validators?: Array<{
              customErrorMessage?: string | null
              validation: CustomFieldValidators
              value: string
            }> | null
          } | null
        }>
      } | null
      validReplyTypes?: Array<{ id: string }> | null
      icon?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
    } | null
    owner?: {
      member?: {
        displayName?: string | null
        name?: string | null
        id: string
        locale: string
        profilePictureId?: string | null
        bannerId?: string | null
        status: MemberStatus
        username: string
        email?: string | null
        emailStatus?: MemberEmailStatus | null
        newEmail?: string | null
        tagline?: string | null
        lastSeenAt?: string | null
        createdAt: string
        updatedAt: string
        relativeUrl?: string | null
        url?: string | null
        externalId?: string | null
        roleId: string
        flagged: boolean
        teammate: boolean
        staffReasons?: Array<StaffReason> | null
        profilePicture?:
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
        badges?: Array<{
          backgroundColor?: string | null
          badgeId: string
          text?: string | null
          textColor?: string | null
          type: BadgeType
          shortDescription: string
          image?:
            | { text: string }
            | { id: string; text: string; variant: GlyphMediaVariant }
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
          badge?: {
            active: boolean
            backgroundColor?: string | null
            id: string
            networkId: string
            name: string
            text?: string | null
            textColor?: string | null
            type: BadgeType
            shortDescription: string
            settings?: Array<{ key: string; value: string }> | null
            image?:
              | { text: string }
              | { id: string; text: string; variant: GlyphMediaVariant }
              | {
                  id: string
                  url: string
                  width?: number | null
                  height?: number | null
                  dominantColorHex?: string | null
                  urls?: {
                    thumb: string
                    small: string
                    medium: string
                    large: string
                    full: string
                  } | null
                }
              | {}
              | null
          } | null
        }> | null
      } | null
    } | null
    tags?: Array<{
      description?: string | null
      id: string
      slug: string
      title: string
    }> | null
    embeds?: Array<{
      author?: string | null
      author_url?: string | null
      description?: string | null
      html?: string | null
      id: string
      provider_name?: string | null
      thumbnail_height?: string | null
      thumbnail_url?: string | null
      thumbnail_width?: string | null
      title?: string | null
      type?: string | null
      url: string
    }> | null
    mentions?: Array<{
      displayName?: string | null
      name?: string | null
      id: string
      locale: string
      profilePictureId?: string | null
      bannerId?: string | null
      status: MemberStatus
      username: string
      email?: string | null
      emailStatus?: MemberEmailStatus | null
      newEmail?: string | null
      tagline?: string | null
      lastSeenAt?: string | null
      createdAt: string
      updatedAt: string
      relativeUrl?: string | null
      url?: string | null
      externalId?: string | null
      roleId: string
      flagged: boolean
      teammate: boolean
      staffReasons?: Array<StaffReason> | null
    }> | null
    space?: {
      id: string
      slug: string
      name: string
      description?: string | null
      type: SpaceType
      layout: string
      private?: boolean | null
      groupId?: string | null
      hidden?: boolean | null
      inviteOnly?: boolean | null
      nonAdminsCanInvite?: boolean | null
      customOrderingIndexInGroup: number
      relativeUrl?: string | null
      url?: string | null
      networkId: string
      isHomepage?: boolean | null
      membersCount: number
      postsCount?: number | null
      createdById: string
      createdAt: string
      updatedAt: string
      whoCanPost?: Array<string> | null
      whoCanReact?: Array<string> | null
      whoCanReply?: Array<string> | null
      address: { path: string; exact: boolean }
      customSeoDetail?: {
        title?: string | null
        description?: string | null
        noIndex?: boolean | null
        thumbnail?:
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
      } | null
      slate?: {
        rootBlock: string
        blocks: Array<{
          id: string
          name: string
          children?: string | null
          extraProps?: string | null
          output?: string | null
          props?: string | null
        }>
        restrictions?: {
          nonEditableBlocks?: Array<string> | null
          lockedChildrenBlocks?: Array<string> | null
          nonRemovableBlocks?: Array<string> | null
        } | null
      } | null
      banner?:
        | { text: string }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      image?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      highlightedTags?: Array<{
        description?: string | null
        id: string
        slug: string
        title: string
      }> | null
      collection?: {
        id: string
        slug: string
        name: string
        description?: string | null
        createdAt: string
        relativeUrl?: string | null
        url?: string | null
      } | null
      authMemberProps?: {
        context: PermissionContext
        membershipStatus?: SpaceMembershipStatus | null
        subscribed?: boolean | null
        scopes?: Array<string> | null
        availablePostTypes?: Array<{ id: string; name: string }> | null
        permissions?: Array<{
          name: string
          isAuthorized: {
            authorized: boolean
            reason?: UnauthorizedReason | null
          }
          inputPermissions: Array<{
            path: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
          }>
          outputPermissions: Array<{
            path: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
          }>
        }> | null
      } | null
    } | null
    reactions?: Array<{
      count: number
      reacted: boolean
      reaction: string
      participants?: {
        nodes?: Array<{
          participant?: { id: string; name?: string | null } | null
        }> | null
      } | null
    }> | null
    replies?: {
      totalCount?: number | null
      nodes?: Array<{
        id: string
        slug?: string | null
        subscribersCount?: number | null
        postTypeId: string
        reactionsCount: number
        hasMoreContent: boolean
        isAnonymous: boolean
        isHidden?: boolean | null
        shortContent?: string | null
        createdAt: string
        publishedAt?: string | null
        ownerId: string
        createdById: string
        status: PostStatus
        spaceId: string
        imageIds: Array<string>
        pinnedInto: Array<PinnedInto>
        repliesCount: number
        totalRepliesCount: number
        locked: boolean
        repliedToIds?: Array<string> | null
        repliedToId?: string | null
        title?: string | null
        description?: string | null
        embedIds: Array<string>
        mentionedMembers: Array<string>
        primaryReactionType?: ReactionType | null
        lastActivityAt?: string | null
        language?: string | null
        relativeUrl?: string | null
        url?: string | null
        mappingFields?: Array<{
          key: string
          type: PostMappingTypeEnum
          value: string
        }> | null
        fields?: Array<{
          key: string
          value?: string | null
          relationEntities?: {
            medias: Array<
              | { text: string }
              | {
                  downloadUrl: string
                  extension: string
                  id: string
                  name?: string | null
                  size?: number | null
                  status?: MediaStatus | null
                  url: string
                }
              | { id: string; text: string; variant: GlyphMediaVariant }
              | {
                  id: string
                  url: string
                  width?: number | null
                  height?: number | null
                  dominantColorHex?: string | null
                  urls?: {
                    thumb: string
                    small: string
                    medium: string
                    large: string
                    full: string
                  } | null
                }
            >
            members: Array<{
              bannerId?: string | null
              blockedMemberIds?: Array<string> | null
              createdAt: string
              displayName?: string | null
              email?: string | null
              emailStatus?: MemberEmailStatus | null
              externalId?: string | null
              externalUrl?: string | null
              flagged: boolean
              id: string
              lastSeen?: string | null
              lastSeenAt?: string | null
              locale: string
              name?: string | null
              networkId: string
              newEmail?: string | null
              overrideTeammate?: boolean | null
              profilePictureId?: string | null
              relativeUrl?: string | null
              roleId: string
              score?: number | null
              staffReasons?: Array<StaffReason> | null
              status: MemberStatus
              subscribersCount?: number | null
              tagline?: string | null
              teammate: boolean
              timeZone?: string | null
              updatedAt: string
              url?: string | null
              username: string
              verifiedAt?: string | null
              profilePicture?:
                | {
                    id: string
                    url: string
                    width?: number | null
                    height?: number | null
                    dominantColorHex?: string | null
                    urls?: {
                      thumb: string
                      small: string
                      medium: string
                      large: string
                      full: string
                    } | null
                  }
                | {}
                | null
            }>
            posts: Array<{
              allowedEmojis?: Array<string> | null
              allowedReactions?: Array<string> | null
              attachmentIds: Array<string>
              createdAt: string
              createdById: string
              description?: string | null
              embedIds: Array<string>
              externalId?: string | null
              externalUrl?: string | null
              followersCount?: number | null
              forbiddenEmojis?: Array<string> | null
              forbiddenReactions?: Array<string> | null
              hasMoreContent: boolean
              id: string
              imageIds: Array<string>
              isAnonymous: boolean
              isHidden?: boolean | null
              language?: string | null
              lastActivityAt?: string | null
              locked: boolean
              mentionedMembers: Array<string>
              negativeReactions?: Array<string> | null
              negativeReactionsCount?: number | null
              networkId: string
              ownerId: string
              pinnedInto: Array<PinnedInto>
              positiveReactions?: Array<string> | null
              positiveReactionsCount?: number | null
              postTypeId: string
              primaryReactionType?: ReactionType | null
              publishedAt?: string | null
              reactionsCount: number
              relativeUrl?: string | null
              repliedToId?: string | null
              repliedToIds?: Array<string> | null
              repliesCount: number
              shortContent?: string | null
              singleChoiceReactions?: Array<string> | null
              slug?: string | null
              spaceId: string
              status: PostStatus
              subscribersCount?: number | null
              tagIds?: Array<string> | null
              textContent?: string | null
              thumbnailId?: string | null
              title?: string | null
              topicIds?: Array<string> | null
              totalRepliesCount: number
              updatedAt: string
              url?: string | null
            }>
            spaces: Array<{
              bannerId?: string | null
              createdAt: string
              createdById: string
              customOrderingIndexInGroup: number
              description?: string | null
              externalId?: string | null
              externalUrl?: string | null
              groupId?: string | null
              hidden?: boolean | null
              highlightedTagIds: Array<string>
              id: string
              imageId?: string | null
              inviteOnly?: boolean | null
              isHomepage?: boolean | null
              isNewUserHomepage?: boolean | null
              isReturningUserHomepage?: boolean | null
              key: string
              layout: string
              membersCount: number
              name: string
              networkId: string
              nonAdminsCanInvite?: boolean | null
              postsCount?: number | null
              private?: boolean | null
              relativeUrl?: string | null
              slug: string
              subscribersCount?: number | null
              type: SpaceType
              updatedAt: string
              url?: string | null
              whoCanPost?: Array<string> | null
              whoCanReact?: Array<string> | null
              whoCanReply?: Array<string> | null
              image?:
                | { text: string }
                | { id: string; text: string; variant: GlyphMediaVariant }
                | {
                    id: string
                    url: string
                    width?: number | null
                    height?: number | null
                    dominantColorHex?: string | null
                    urls?: {
                      thumb: string
                      small: string
                      medium: string
                      large: string
                      full: string
                    } | null
                  }
                | {}
                | null
            }>
            tags: Array<{
              description?: string | null
              id: string
              slug: string
              spaceId?: string | null
              title: string
            }>
          } | null
        }> | null
        thumbnail?:
          | { text: string }
          | { id: string; text: string; variant: GlyphMediaVariant }
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
        customSeoDetail?: {
          title?: string | null
          description?: string | null
          noIndex?: boolean | null
          thumbnail?:
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
        } | null
        attachments?: Array<{
          extension: string
          id: string
          name?: string | null
          size?: number | null
          url: string
          downloadUrl: string
        }> | null
        authMemberProps?: {
          context: PermissionContext
          scopes?: Array<string> | null
          subscribed?: boolean | null
          canReact?: boolean | null
          permissions?: Array<{
            name: string
            isAuthorized: {
              authorized: boolean
              reason?: UnauthorizedReason | null
            }
            inputPermissions: Array<{
              path: string
              isAuthorized: {
                authorized: boolean
                reason?: UnauthorizedReason | null
              }
            }>
            outputPermissions: Array<{
              path: string
              isAuthorized: {
                authorized: boolean
                reason?: UnauthorizedReason | null
              }
            }>
          }> | null
          availableReplyTypes?: Array<{
            archived: boolean
            allowedEmojis?: Array<string> | null
            context: PostTypeContext
            createdAt: string
            forbiddenEmojis?: Array<string> | null
            id: string
            languageTemplate?: string | null
            name: string
            description?: string | null
            negativeReactions?: Array<string> | null
            pluralName: string
            positiveReactions?: Array<string> | null
            primaryReactionType?: ReactionType | null
            shortContentTemplate?: string | null
            singleChoiceReactions?: Array<string> | null
            allowedReactions?: Array<string> | null
            slug: string
            titleTemplate?: string | null
            updatedAt: string
            nativeFieldsTemplates?: {
              description?: string | null
              thumbnailId?: string | null
              title?: string | null
            } | null
            customReactions?: Array<{
              activeColor?: string | null
              activeGlyphId?: string | null
              activeName?: string | null
              color?: string | null
              glyphId: string
              key: string
              name: string
            }> | null
            mappings?: Array<{
              key: string
              field?: PostFieldsEnum | null
              type: PostMappingTypeEnum
              title?: string | null
              description?: string | null
              required?: boolean | null
              isMainContent?: boolean | null
              isSearchable?: boolean | null
              default?: string | null
            }> | null
          }> | null
        } | null
        owner?: {
          member?: {
            displayName?: string | null
            name?: string | null
            id: string
            locale: string
            profilePictureId?: string | null
            bannerId?: string | null
            status: MemberStatus
            username: string
            email?: string | null
            emailStatus?: MemberEmailStatus | null
            newEmail?: string | null
            tagline?: string | null
            lastSeenAt?: string | null
            createdAt: string
            updatedAt: string
            relativeUrl?: string | null
            url?: string | null
            externalId?: string | null
            roleId: string
            flagged: boolean
            teammate: boolean
            staffReasons?: Array<StaffReason> | null
            profilePicture?:
              | {
                  id: string
                  url: string
                  width?: number | null
                  height?: number | null
                  dominantColorHex?: string | null
                  urls?: {
                    thumb: string
                    small: string
                    medium: string
                    large: string
                    full: string
                  } | null
                }
              | {}
              | null
            badges?: Array<{
              backgroundColor?: string | null
              badgeId: string
              text?: string | null
              textColor?: string | null
              type: BadgeType
              shortDescription: string
              image?:
                | { text: string }
                | { id: string; text: string; variant: GlyphMediaVariant }
                | {
                    id: string
                    url: string
                    width?: number | null
                    height?: number | null
                    dominantColorHex?: string | null
                    urls?: {
                      thumb: string
                      small: string
                      medium: string
                      large: string
                      full: string
                    } | null
                  }
                | {}
                | null
              badge?: {
                active: boolean
                backgroundColor?: string | null
                id: string
                networkId: string
                name: string
                text?: string | null
                textColor?: string | null
                type: BadgeType
                shortDescription: string
                settings?: Array<{ key: string; value: string }> | null
                image?:
                  | { text: string }
                  | { id: string; text: string; variant: GlyphMediaVariant }
                  | {
                      id: string
                      url: string
                      width?: number | null
                      height?: number | null
                      dominantColorHex?: string | null
                      urls?: {
                        thumb: string
                        small: string
                        medium: string
                        large: string
                        full: string
                      } | null
                    }
                  | {}
                  | null
              } | null
            }> | null
          } | null
        } | null
        embeds?: Array<{
          author?: string | null
          author_url?: string | null
          description?: string | null
          html?: string | null
          id: string
          provider_name?: string | null
          thumbnail_height?: string | null
          thumbnail_url?: string | null
          thumbnail_width?: string | null
          title?: string | null
          type?: string | null
          url: string
        }> | null
        mentions?: Array<{
          displayName?: string | null
          name?: string | null
          id: string
          locale: string
          profilePictureId?: string | null
          bannerId?: string | null
          status: MemberStatus
          username: string
          email?: string | null
          emailStatus?: MemberEmailStatus | null
          newEmail?: string | null
          tagline?: string | null
          lastSeenAt?: string | null
          createdAt: string
          updatedAt: string
          relativeUrl?: string | null
          url?: string | null
          externalId?: string | null
          roleId: string
          flagged: boolean
          teammate: boolean
          staffReasons?: Array<StaffReason> | null
        }> | null
        reactions?: Array<{
          count: number
          reacted: boolean
          reaction: string
          participants?: {
            nodes?: Array<{
              participant?: { id: string; name?: string | null } | null
            }> | null
          } | null
        }> | null
      }> | null
      pageInfo: { endCursor?: string | null; hasNextPage: boolean }
    } | null
    pinnedReplies?: Array<{
      id: string
      slug?: string | null
      subscribersCount?: number | null
      postTypeId: string
      reactionsCount: number
      hasMoreContent: boolean
      isAnonymous: boolean
      isHidden?: boolean | null
      shortContent?: string | null
      createdAt: string
      publishedAt?: string | null
      ownerId: string
      createdById: string
      status: PostStatus
      spaceId: string
      imageIds: Array<string>
      pinnedInto: Array<PinnedInto>
      repliesCount: number
      totalRepliesCount: number
      locked: boolean
      repliedToIds?: Array<string> | null
      repliedToId?: string | null
      title?: string | null
      description?: string | null
      embedIds: Array<string>
      mentionedMembers: Array<string>
      primaryReactionType?: ReactionType | null
      lastActivityAt?: string | null
      language?: string | null
      relativeUrl?: string | null
      url?: string | null
      mappingFields?: Array<{
        key: string
        type: PostMappingTypeEnum
        value: string
      }> | null
      fields?: Array<{
        key: string
        value?: string | null
        relationEntities?: {
          medias: Array<
            | { text: string }
            | {
                downloadUrl: string
                extension: string
                id: string
                name?: string | null
                size?: number | null
                status?: MediaStatus | null
                url: string
              }
            | { id: string; text: string; variant: GlyphMediaVariant }
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
          >
          members: Array<{
            bannerId?: string | null
            blockedMemberIds?: Array<string> | null
            createdAt: string
            displayName?: string | null
            email?: string | null
            emailStatus?: MemberEmailStatus | null
            externalId?: string | null
            externalUrl?: string | null
            flagged: boolean
            id: string
            lastSeen?: string | null
            lastSeenAt?: string | null
            locale: string
            name?: string | null
            networkId: string
            newEmail?: string | null
            overrideTeammate?: boolean | null
            profilePictureId?: string | null
            relativeUrl?: string | null
            roleId: string
            score?: number | null
            staffReasons?: Array<StaffReason> | null
            status: MemberStatus
            subscribersCount?: number | null
            tagline?: string | null
            teammate: boolean
            timeZone?: string | null
            updatedAt: string
            url?: string | null
            username: string
            verifiedAt?: string | null
            profilePicture?:
              | {
                  id: string
                  url: string
                  width?: number | null
                  height?: number | null
                  dominantColorHex?: string | null
                  urls?: {
                    thumb: string
                    small: string
                    medium: string
                    large: string
                    full: string
                  } | null
                }
              | {}
              | null
          }>
          posts: Array<{
            allowedEmojis?: Array<string> | null
            allowedReactions?: Array<string> | null
            attachmentIds: Array<string>
            createdAt: string
            createdById: string
            description?: string | null
            embedIds: Array<string>
            externalId?: string | null
            externalUrl?: string | null
            followersCount?: number | null
            forbiddenEmojis?: Array<string> | null
            forbiddenReactions?: Array<string> | null
            hasMoreContent: boolean
            id: string
            imageIds: Array<string>
            isAnonymous: boolean
            isHidden?: boolean | null
            language?: string | null
            lastActivityAt?: string | null
            locked: boolean
            mentionedMembers: Array<string>
            negativeReactions?: Array<string> | null
            negativeReactionsCount?: number | null
            networkId: string
            ownerId: string
            pinnedInto: Array<PinnedInto>
            positiveReactions?: Array<string> | null
            positiveReactionsCount?: number | null
            postTypeId: string
            primaryReactionType?: ReactionType | null
            publishedAt?: string | null
            reactionsCount: number
            relativeUrl?: string | null
            repliedToId?: string | null
            repliedToIds?: Array<string> | null
            repliesCount: number
            shortContent?: string | null
            singleChoiceReactions?: Array<string> | null
            slug?: string | null
            spaceId: string
            status: PostStatus
            subscribersCount?: number | null
            tagIds?: Array<string> | null
            textContent?: string | null
            thumbnailId?: string | null
            title?: string | null
            topicIds?: Array<string> | null
            totalRepliesCount: number
            updatedAt: string
            url?: string | null
          }>
          spaces: Array<{
            bannerId?: string | null
            createdAt: string
            createdById: string
            customOrderingIndexInGroup: number
            description?: string | null
            externalId?: string | null
            externalUrl?: string | null
            groupId?: string | null
            hidden?: boolean | null
            highlightedTagIds: Array<string>
            id: string
            imageId?: string | null
            inviteOnly?: boolean | null
            isHomepage?: boolean | null
            isNewUserHomepage?: boolean | null
            isReturningUserHomepage?: boolean | null
            key: string
            layout: string
            membersCount: number
            name: string
            networkId: string
            nonAdminsCanInvite?: boolean | null
            postsCount?: number | null
            private?: boolean | null
            relativeUrl?: string | null
            slug: string
            subscribersCount?: number | null
            type: SpaceType
            updatedAt: string
            url?: string | null
            whoCanPost?: Array<string> | null
            whoCanReact?: Array<string> | null
            whoCanReply?: Array<string> | null
            image?:
              | { text: string }
              | { id: string; text: string; variant: GlyphMediaVariant }
              | {
                  id: string
                  url: string
                  width?: number | null
                  height?: number | null
                  dominantColorHex?: string | null
                  urls?: {
                    thumb: string
                    small: string
                    medium: string
                    large: string
                    full: string
                  } | null
                }
              | {}
              | null
          }>
          tags: Array<{
            description?: string | null
            id: string
            slug: string
            spaceId?: string | null
            title: string
          }>
        } | null
      }> | null
      thumbnail?:
        | { text: string }
        | { id: string; text: string; variant: GlyphMediaVariant }
        | {
            id: string
            url: string
            width?: number | null
            height?: number | null
            dominantColorHex?: string | null
            urls?: {
              thumb: string
              small: string
              medium: string
              large: string
              full: string
            } | null
          }
        | {}
        | null
      customSeoDetail?: {
        title?: string | null
        description?: string | null
        noIndex?: boolean | null
        thumbnail?:
          | {
              id: string
              url: string
              width?: number | null
              height?: number | null
              dominantColorHex?: string | null
              urls?: {
                thumb: string
                small: string
                medium: string
                large: string
                full: string
              } | null
            }
          | {}
          | null
      } | null
      attachments?: Array<{
        extension: string
        id: string
        name?: string | null
        size?: number | null
        url: string
        downloadUrl: string
      }> | null
      owner?: {
        member?: {
          displayName?: string | null
          name?: string | null
          id: string
          locale: string
          profilePictureId?: string | null
          bannerId?: string | null
          status: MemberStatus
          username: string
          email?: string | null
          emailStatus?: MemberEmailStatus | null
          newEmail?: string | null
          tagline?: string | null
          lastSeenAt?: string | null
          createdAt: string
          updatedAt: string
          relativeUrl?: string | null
          url?: string | null
          externalId?: string | null
          roleId: string
          flagged: boolean
          teammate: boolean
          staffReasons?: Array<StaffReason> | null
          profilePicture?:
            | {
                id: string
                url: string
                width?: number | null
                height?: number | null
                dominantColorHex?: string | null
                urls?: {
                  thumb: string
                  small: string
                  medium: string
                  large: string
                  full: string
                } | null
              }
            | {}
            | null
          badges?: Array<{
            backgroundColor?: string | null
            badgeId: string
            text?: string | null
            textColor?: string | null
            type: BadgeType
            shortDescription: string
            image?:
              | { text: string }
              | { id: string; text: string; variant: GlyphMediaVariant }
              | {
                  id: string
                  url: string
                  width?: number | null
                  height?: number | null
                  dominantColorHex?: string | null
                  urls?: {
                    thumb: string
                    small: string
                    medium: string
                    large: string
                    full: string
                  } | null
                }
              | {}
              | null
            badge?: {
              active: boolean
              backgroundColor?: string | null
              id: string
              networkId: string
              name: string
              text?: string | null
              textColor?: string | null
              type: BadgeType
              shortDescription: string
              settings?: Array<{ key: string; value: string }> | null
              image?:
                | { text: string }
                | { id: string; text: string; variant: GlyphMediaVariant }
                | {
                    id: string
                    url: string
                    width?: number | null
                    height?: number | null
                    dominantColorHex?: string | null
                    urls?: {
                      thumb: string
                      small: string
                      medium: string
                      large: string
                      full: string
                    } | null
                  }
                | {}
                | null
            } | null
          }> | null
        } | null
      } | null
      embeds?: Array<{
        author?: string | null
        author_url?: string | null
        description?: string | null
        html?: string | null
        id: string
        provider_name?: string | null
        thumbnail_height?: string | null
        thumbnail_url?: string | null
        thumbnail_width?: string | null
        title?: string | null
        type?: string | null
        url: string
      }> | null
      mentions?: Array<{
        displayName?: string | null
        name?: string | null
        id: string
        locale: string
        profilePictureId?: string | null
        bannerId?: string | null
        status: MemberStatus
        username: string
        email?: string | null
        emailStatus?: MemberEmailStatus | null
        newEmail?: string | null
        tagline?: string | null
        lastSeenAt?: string | null
        createdAt: string
        updatedAt: string
        relativeUrl?: string | null
        url?: string | null
        externalId?: string | null
        roleId: string
        flagged: boolean
        teammate: boolean
        staffReasons?: Array<StaffReason> | null
      }> | null
    }> | null
  }
}

export type SsoDataQueryVariables = Exact<{
  status?: InputMaybe<SsoStatus>
}>

export type SsoDataQuery = {
  ssos: Array<{
    authorizationUrl?: string | null
    buttonText?: string | null
    clientId?: string | null
    clientSecret?: string | null
    idpUrl?: string | null
    logoutUrl?: string | null
    name?: string | null
    provider?: SsoProvider | null
    scopes?: Array<string> | null
    settingsUrl?: string | null
    signUpUrl?: string | null
    status: SsoStatus
    tokenUrl?: string | null
    type: SsoType
    userProfileUrl?: string | null
    defaultRelayState?: string | null
    allowSignUp?: boolean | null
  }>
}

export type RedirectQueryVariables = Exact<{
  url: Scalars['String']['input']
}>

export type RedirectQuery = { redirect: { resolvedUrl: string } }

export type AuthMemberToVerifyQueryVariables = Exact<{ [key: string]: never }>

export type AuthMemberToVerifyQuery = { authMember: { id: string } }

export type AuthVerifyMemberMutationVariables = Exact<{
  input: VerifyMemberInput
}>

export type AuthVerifyMemberMutation = {
  verifyMember: {
    accessToken: string
    refreshToken: string
    member: { status: MemberStatus }
  }
}

export type VerifyMemberMutationVariables = Exact<{
  input: VerifyMemberInput
}>

export type VerifyMemberMutation = {
  verifyMember: { accessToken: string; refreshToken: string }
}

export const ImageFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFieldsFragment, unknown>
export const EmojiFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
  ],
} as unknown as DocumentNode<EmojiFieldsFragment, unknown>
export const GlyphFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GlyphFieldsFragment, unknown>
export const BadgeFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Badge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BadgeFieldsFragment, unknown>
export const MemberBadgeFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MemberBadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MemberBadge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'badgeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'badge' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BadgeFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Badge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MemberBadgeFieldsFragment, unknown>
export const CustomSeoDetailFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomSeoDetailFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomSeoDetail' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'noIndex' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomSeoDetailFieldsFragment, unknown>
export const SlateFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SlateFieldsFragment, unknown>
export const SpaceFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SpaceFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Space' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'private' } },
          { kind: 'Field', name: { kind: 'Name', value: 'groupId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hidden' } },
          { kind: 'Field', name: { kind: 'Name', value: 'inviteOnly' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nonAdminsCanInvite' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customOrderingIndexInGroup' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isHomepage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'membersCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdById' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanPost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReact' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReply' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exact' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customSeoDetail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomSeoDetailFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'banner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'highlightedTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'membershipStatus' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'subscribed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availablePostTypes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'permissions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAuthorized' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorized' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reason' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'outputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomSeoDetailFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomSeoDetail' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'noIndex' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SpaceFieldsFragment, unknown>
export const PageFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Page' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'space' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SpaceFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seoDetail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jsonld' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'additionalMeta' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'properties' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomSeoDetailFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomSeoDetail' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'noIndex' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SpaceFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Space' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'private' } },
          { kind: 'Field', name: { kind: 'Name', value: 'groupId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hidden' } },
          { kind: 'Field', name: { kind: 'Name', value: 'inviteOnly' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nonAdminsCanInvite' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customOrderingIndexInGroup' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isHomepage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'membersCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdById' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanPost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReact' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReply' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exact' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customSeoDetail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomSeoDetailFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'banner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'highlightedTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'membershipStatus' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'subscribed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availablePostTypes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'permissions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAuthorized' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorized' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reason' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'outputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFieldsFragment, unknown>
export const FileFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FileFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'File' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'downloadUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'extension' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileFieldsFragment, unknown>
export const PostFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'relationEntities' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'medias' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FileFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EmojiFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GlyphFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'members' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bannerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'blockedMemberIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailStatus' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'flagged' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastSeen' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastSeenAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locale' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'newEmail' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'overrideTeammate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profilePicture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profilePictureId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'roleId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'staffReasons' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tagline' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'teammate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timeZone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'verifiedAt' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allowedEmojis' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allowedReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attachmentIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'embedIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'forbiddenEmojis' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'forbiddenReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasMoreContent' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAnonymous' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHidden' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastActivityAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mentionedMembers' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'negativeReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'negativeReactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ownerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pinnedInto' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'positiveReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'positiveReactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postTypeId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'primaryReactionType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publishedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliedToId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliedToIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliesCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'singleChoiceReactions' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'spaceId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tagIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'textContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnailId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topicIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRepliesCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'spaces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bannerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'customOrderingIndexInGroup',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'groupId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hidden' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'highlightedTagIds' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GlyphFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inviteOnly' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHomepage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isNewUserHomepage' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'isReturningUserHomepage',
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'layout' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'membersCount' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nonAdminsCanInvite' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'private' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanPost' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanReact' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanReply' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'spaceId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FileFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'File' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'downloadUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'extension' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostFieldsFragment, unknown>
export const NonRecursiveBaseCustomFieldFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalKeys' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'required' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'typeOptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dateType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relationType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'richTextType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'textType' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customErrorMessage' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'validation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NonRecursiveBaseCustomFieldFieldsFragment, unknown>
export const BaseCustomFieldFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NonRecursiveBaseCustomFieldFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalKeys' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'required' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'typeOptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dateType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relationType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'richTextType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'textType' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customErrorMessage' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'validation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseCustomFieldFieldsFragment, unknown>
export const CustomFieldsSchemaFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomFieldsSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
                { kind: 'Field', name: { kind: 'Name', value: 'required' } },
                { kind: 'Field', name: { kind: 'Name', value: 'searchable' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typeOptions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dateType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'numberType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relationType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'richTextType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'textType' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validators' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customErrorMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'validation' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'writePrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'readPrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'default' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'externalKeys' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BaseCustomFieldFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalKeys' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'required' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'typeOptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dateType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relationType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'richTextType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'textType' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customErrorMessage' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'validation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NonRecursiveBaseCustomFieldFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomFieldsSchemaFieldsFragment, unknown>
export const PostTypeFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostTypeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pluralName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'context' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'allowedReactions' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryReactionType' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'singleChoiceReactions' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customReactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'activeColor' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeGlyphId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activeName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'glyphId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableSpaces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GlyphFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'postFields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validReplyTypes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'icon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalKeys' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'required' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'typeOptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dateType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relationType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'richTextType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'textType' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customErrorMessage' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'validation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NonRecursiveBaseCustomFieldFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomFieldsSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
                { kind: 'Field', name: { kind: 'Name', value: 'required' } },
                { kind: 'Field', name: { kind: 'Name', value: 'searchable' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typeOptions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dateType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'numberType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relationType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'richTextType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'textType' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validators' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customErrorMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'validation' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'writePrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'readPrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'default' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'externalKeys' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BaseCustomFieldFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostTypeFieldsFragment, unknown>
export const AskDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'Ask' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'q' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ask' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'question' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'q' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AskSubscription, AskSubscriptionVariables>
export const HomepageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Homepage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'type' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'HomeSpaceType' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'homepage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'type' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'type' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'space' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHomepage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomepageQuery, HomepageQueryVariables>
export const SsosAuthDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SsosAuth' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SsoStatus' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ssos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorizationUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'signUpUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SsosAuthQuery, SsosAuthQueryVariables>
export const SsoUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SsoUrl' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SsoUrlInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ssoUrl' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SsoUrlQuery, SsoUrlQueryVariables>
export const AuthMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AuthMember' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMember' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'emailStatus' } },
                { kind: 'Field', name: { kind: 'Name', value: 'newEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastSeenAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'roleId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'flagged' } },
                { kind: 'Field', name: { kind: 'Name', value: 'teammate' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'staffReasons' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'timeZone' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePicture' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'banner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'visible' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authMemberProps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'canSendPrivateMessages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'context' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'inputPermissions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'values' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'isAuthorized',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'authorized',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'reason',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'outputPermissions',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scopes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribed' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'badges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MemberBadgeFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'extraProperties' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'privateMessaging' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'privateMessagingEnabled',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'whoCanContactMember',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quickEnter' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Badge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MemberBadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MemberBadge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'badgeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'badge' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BadgeFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthMemberQuery, AuthMemberQueryVariables>
export const NetworkSsoDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkSsoData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'hideDefaultAuthenticationForm',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NetworkSsoDataQuery, NetworkSsoDataQueryVariables>
export const SsosRedirectDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SsosRedirect' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SsoStatus' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ssos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorizationUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'signUpUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'buttonText' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SsosRedirectQuery, SsosRedirectQueryVariables>
export const ConfirmResetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ConfirmResetPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ConfirmResetPasswordInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'confirmResetPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ConfirmResetPasswordMutation,
  ConfirmResetPasswordMutationVariables
>
export const AuthMemberContactDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AuthMemberContact' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMember' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AuthMemberContactQuery,
  AuthMemberContactQueryVariables
>
export const AuthMemberIntercomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AuthMemberIntercom' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMember' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AuthMemberIntercomQuery,
  AuthMemberIntercomQueryVariables
>
export const JwtTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'JwtToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'networkDomain' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'ssoToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'networkDomain' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'networkDomain' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ssoToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ssoToken' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'member' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JwtTokenQuery, JwtTokenQueryVariables>
export const JwtAuthTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'JwtAuthToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'networkDomain' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'ssoToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'networkDomain' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'networkDomain' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ssoToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'ssoToken' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'member' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JwtAuthTokenQuery, JwtAuthTokenQueryVariables>
export const LoginNetworkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LoginNetwork' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginNetworkWithPasswordInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'loginNetwork' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginNetworkMutation,
  LoginNetworkMutationVariables
>
export const LogoutNetworkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LogoutNetwork' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'LogoutNetworkInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logoutNetwork' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LogoutNetworkMutation,
  LogoutNetworkMutationVariables
>
export const NetworkLogoutUrlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkLogoutUrl' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeSso' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logoutUrl' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkLogoutUrlQuery,
  NetworkLogoutUrlQueryVariables
>
export const NetworkManifestDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkManifestData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'themes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokens' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'colors' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'key' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeTheme' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'colors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'light' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'weights' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'key' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dark' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'weights' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'key' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'typography' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'darkFavicon' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'darkMobileLogo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lightFavicon' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lightMobileLogo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'logo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkManifestDataQuery,
  NetworkManifestDataQueryVariables
>
export const UpsertThemeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'upsertTheme' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpsertTheme' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'upsertTheme' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpsertThemeMutation, UpsertThemeMutationVariables>
export const NetworkBasicDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkBasicData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'networkDomain' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'refreshToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'networkDomain' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'networkDomain' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'refreshToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'networkPublicInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'visibility' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domainSubfolder' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkBasicDataQuery,
  NetworkBasicDataQueryVariables
>
export const NetworkBasicPublicInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkBasicPublicInfo' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'networkPublicInfo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'visibility' } },
                { kind: 'Field', name: { kind: 'Name', value: 'domain' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'domainSubfolder' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkBasicPublicInfoQuery,
  NetworkBasicPublicInfoQueryVariables
>
export const NetworkIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkId' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NetworkIdQuery, NetworkIdQueryVariables>
export const OAuthTokensDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'OAuthTokens' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OAuthTokenInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'oAuthTokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'memberId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresIn' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OAuthTokensQuery, OAuthTokensQueryVariables>
export const OtpTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'OtpToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'networkDomain' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'otp' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'networkDomain' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'networkDomain' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'otp' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'otp' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'networkPublicInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domainSubfolder' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OtpTokenQuery, OtpTokenQueryVariables>
export const NetworkFeedRssDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkFeedRssData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'logo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkFeedRssDataQuery,
  NetworkFeedRssDataQueryVariables
>
export const GetRssFeedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRssFeed' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'feed' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fields' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'space' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'owner' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'member' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRssFeedQuery, GetRssFeedQueryVariables>
export const NetworkMemberPostsRssDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkMemberPostsRssData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'logo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkMemberPostsRssDataQuery,
  NetworkMemberPostsRssDataQueryVariables
>
export const RssGetMemberPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RssGetMemberPosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'memberId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'memberPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'memberId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'memberId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fields' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'owner' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'member' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'space' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RssGetMemberPostsQuery,
  RssGetMemberPostsQueryVariables
>
export const NetworkPostRepliesRssDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkPostRepliesRssData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'logo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkPostRepliesRssDataQuery,
  NetworkPostRepliesRssDataQueryVariables
>
export const RssGetRepliesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RssGetReplies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'replies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'postId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'postId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fields' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'owner' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'member' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'space' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RssGetRepliesQuery, RssGetRepliesQueryVariables>
export const NetworkSpacePostsRssDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkSpacePostsRssData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'logo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NetworkSpacePostsRssDataQuery,
  NetworkSpacePostsRssDataQueryVariables
>
export const GetRssSpacePostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRssSpacePosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'spaceIds' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'spaceIds' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'spaceIds' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fields' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'owner' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'member' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRssSpacePostsQuery,
  GetRssSpacePostsQueryVariables
>
export const RssGetMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RssGetMember' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'member' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePicture' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RssGetMemberQuery, RssGetMemberQueryVariables>
export const RssGetPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RssGetPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'post' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shortContent' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RssGetPostQuery, RssGetPostQueryVariables>
export const RssGetSpaceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'RssGetSpace' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'space' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slug' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slug' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RssGetSpaceQuery, RssGetSpaceQueryVariables>
export const LoginWithSamlDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LoginWithSaml' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginWithSamlResponseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'loginWithSamlResponse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'member' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginWithSamlMutation,
  LoginWithSamlMutationVariables
>
export const JoinNetworkWithInvitationLinkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JoinNetworkWithInvitationLink' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JoinNetworkWithLinkInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'joinNetworkWithInvitationLink' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  JoinNetworkWithInvitationLinkMutation,
  JoinNetworkWithInvitationLinkMutationVariables
>
export const JoinNetworkWithTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JoinNetworkWithToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JoinNetworkWithTokenInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'joinNetworkWithToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  JoinNetworkWithTokenMutation,
  JoinNetworkWithTokenMutationVariables
>
export const JoinNetworkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'JoinNetwork' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JoinNetworkInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'joinNetwork' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JoinNetworkMutation, JoinNetworkMutationVariables>
export const SitemapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Sitemap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reverse' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'spacePath' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sitemap' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reverse' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reverse' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'spacePath' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'spacePath' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastModifiedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SitemapQuery, SitemapQueryVariables>
export const PostsSitemapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PostsSitemap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reverse' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'spacePath' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sitemap' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reverse' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reverse' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'spacePath' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'spacePath' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastModifiedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostsSitemapQuery, PostsSitemapQueryVariables>
export const SpacesSitemapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SpacesSitemap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reverse' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'spacePath' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sitemap' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'after' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'reverse' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'reverse' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'spacePath' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'spacePath' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nodes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastModifiedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SpacesSitemapQuery, SpacesSitemapQueryVariables>
export const SsosTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SsosToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'networkDomain' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tokens' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'networkDomain' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'networkDomain' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'networkPublicInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domain' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'domainSubfolder' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SsosTokenQuery, SsosTokenQueryVariables>
export const LoginWithSsoCodeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LoginWithSsoCode' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginWithSsoCodeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'loginWithSsoCode' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'member' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginWithSsoCodeMutation,
  LoginWithSsoCodeMutationVariables
>
export const InvitationLinkSsrDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'InvitationLinkSsrData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'invitationLinkValidity' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InvitationLinkSsrDataQuery,
  InvitationLinkSsrDataQueryVariables
>
export const InvitationTokenSsrDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'InvitationTokenSsrData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'memberInvitationValidity' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiresAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'invitationMessage' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'inviteeEmail' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'inviteeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'inviteeName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'inviterId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'joinedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'roleId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InvitationTokenSsrDataQuery,
  InvitationTokenSsrDataQueryVariables
>
export const MemberSsrDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MemberSsrData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'member' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePictureId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bannerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'emailStatus' } },
                { kind: 'Field', name: { kind: 'Name', value: 'newEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastSeenAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'externalId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'roleId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'flagged' } },
                { kind: 'Field', name: { kind: 'Name', value: 'teammate' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'staffReasons' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'visible' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'banner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePicture' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authMemberProps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'context' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scopes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'canSendPrivateMessages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribed' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'inputPermissions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'outputPermissions',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'badges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'MemberBadgeFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Badge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MemberBadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MemberBadge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'badgeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'badge' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BadgeFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MemberSsrDataQuery, MemberSsrDataQueryVariables>
export const NetworkSsrDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'NetworkSsrData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'network' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'organizationId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'membership' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableLocales' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'newDomain' } },
                { kind: 'Field', name: { kind: 'Name', value: 'brandColor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'passwordComplexity' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'hideDefaultAuthenticationForm',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'termsOfServiceUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'privacyPolicyUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tribeBranding' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralProgramEnabled' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralLink' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'whoCanInviteIds' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'willUnpublishAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeSso' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logoutUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'settingsUrl' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailEnabled' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailFrom' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'emailNotificationEnabled',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fileSizeLimit' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fileTypesLimit' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageSizeLimit' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageTypesLimit' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'contentTranslation' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'enabled' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memberPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'canDeleteAccount' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'privateMessaging' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'privateMessagingEnabled',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'whoCanMembersContact',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'whoCanCreateGroups',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captcha' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'enabled' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'siteKey' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'secretKey' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailDigestLayoutId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailDigestEnabled' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'emailDigestRecentPostsFilter',
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'filterOption' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'spaceIds' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'xFrameEmbedding' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'allowedDomains' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'navigationSlates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headerDisabled' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sidebar1Disabled' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'header' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'SlateFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sidebar1' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'SlateFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeTheme' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'colors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'light' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'weights' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'key' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dark' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'weights' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'key' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'typography' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'themes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokens' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'colors' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'key' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'roles' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'visible' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scopes' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authMemberProps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'context' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scopes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'inputPermissions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'values' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'isAuthorized',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'authorized',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'reason',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'value',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'outputPermissions',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'systemSpaces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'layout' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHomepage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'exact' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'groupId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'membersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'private' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hidden' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inviteOnly' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nonAdminsCanInvite' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'customOrderingIndexInGroup',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanPost' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanReact' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanReply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'slate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'SlateFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customSeoDetail' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'thumbnail' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ImageFields',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'noIndex' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'memberFields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'CustomFieldsSchemaFields',
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customSeoDetail' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'CustomSeoDetailFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'extraProperties' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postTypes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PostTypeFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customCodes' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'anonymize' },
                      value: { kind: 'BooleanValue', value: false },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'position' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isCmpProvider' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'darkFavicon' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lightFavicon' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lightMobileLogo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'darkMobileLogo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lightLogo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'darkLogo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'favicon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EmojiFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'badges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BadgeFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'logo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalKeys' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'required' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'typeOptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dateType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relationType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'richTextType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'textType' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customErrorMessage' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'validation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NonRecursiveBaseCustomFieldFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomFieldsSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
                { kind: 'Field', name: { kind: 'Name', value: 'required' } },
                { kind: 'Field', name: { kind: 'Name', value: 'searchable' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typeOptions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dateType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'numberType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relationType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'richTextType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'textType' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validators' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customErrorMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'validation' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'writePrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'readPrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'default' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'externalKeys' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BaseCustomFieldFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomSeoDetailFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomSeoDetail' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'noIndex' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostTypeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pluralName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'context' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'allowedReactions' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryReactionType' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'singleChoiceReactions' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customReactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'activeColor' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeGlyphId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activeName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'glyphId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableSpaces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GlyphFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'postFields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validReplyTypes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'icon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Badge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NetworkSsrDataQuery, NetworkSsrDataQueryVariables>
export const PageDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'path' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'page' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'path' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'path' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PageFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomSeoDetailFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomSeoDetail' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'noIndex' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SpaceFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Space' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'private' } },
          { kind: 'Field', name: { kind: 'Name', value: 'groupId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hidden' } },
          { kind: 'Field', name: { kind: 'Name', value: 'inviteOnly' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nonAdminsCanInvite' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customOrderingIndexInGroup' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isHomepage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'membersCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdById' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanPost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReact' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReply' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exact' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customSeoDetail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomSeoDetailFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'banner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'highlightedTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'membershipStatus' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'subscribed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availablePostTypes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'permissions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAuthorized' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorized' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reason' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'outputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Page' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'space' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SpaceFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seoDetail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'jsonld' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'additionalMeta' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'properties' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageDataQuery, PageDataQueryVariables>
export const PostSsrDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PostSsrData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'post' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mappingFields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PostFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subscribersCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'postTypeId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reactionsCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hasMoreContent' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isAnonymous' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isHidden' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shortContent' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdById' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'spaceId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'imageIds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pinnedInto' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'repliesCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalRepliesCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'locked' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'repliedToIds' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'repliedToId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnail' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EmojiFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GlyphFields' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'embedIds' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mentionedMembers' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'primaryReactionType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastActivityAt' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'language' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customSeoDetail' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'CustomSeoDetailFields' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'attachments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'extension' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'downloadUrl' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'polls' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'closesAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'deletedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isDraft' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'maxSelections' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'opensAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'options' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'label' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'result' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'voteCastShare',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'voteCount' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parentEntityId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parentEntityType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalParticipants' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalVoteCasts' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'usersVote' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'networkId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pollId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'selectionIds' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'voteToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authMemberProps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'context' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scopes' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribed' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'permissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'inputPermissions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'outputPermissions',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'path' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isAuthorized',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'authorized',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'reason',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'availableReplyTypes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'archived' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'allowedEmojis' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'context' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'forbiddenEmojis' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'languageTemplate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'nativeFieldsTemplates',
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnailId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'negativeReactions',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pluralName' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'positiveReactions',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'primaryReactionType',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'shortContentTemplate',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'singleChoiceReactions',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'allowedReactions' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'customReactions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'activeColor',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'activeGlyphId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'activeName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'color' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'glyphId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'titleTemplate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mappings' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'field' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'required' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isMainContent',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isSearchable',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'default' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'canReact' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postType' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PostTypeFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'displayName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'locale' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'profilePictureId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bannerId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'emailStatus' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'newEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tagline' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastSeenAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'relativeUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'externalId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'roleId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'flagged' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'teammate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'staffReasons' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'profilePicture' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ImageFields',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'badges' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'MemberBadgeFields',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'embeds' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'author_url' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'html' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'provider_name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnail_height' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnail_url' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnail_width' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mentions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locale' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profilePictureId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bannerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailStatus' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'newEmail' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tagline' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastSeenAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'roleId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'flagged' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'teammate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'staffReasons' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'space' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SpaceFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reactions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reacted' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reaction' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'participants' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '10' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'participant',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'replies' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'limit' },
                      value: { kind: 'IntValue', value: '2' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'reverse' },
                      value: { kind: 'BooleanValue', value: true },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: { kind: 'EnumValue', value: 'createdAt' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mappingFields' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'value' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fields' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'PostFields' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subscribersCount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postTypeId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reactionsCount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'hasMoreContent' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAnonymous' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isHidden' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortContent' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'publishedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ownerId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdById' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'spaceId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'imageIds' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pinnedInto' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'repliesCount' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalRepliesCount',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'locked' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'repliedToIds' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'repliedToId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'thumbnail' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ImageFields',
                                    },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'EmojiFields',
                                    },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'GlyphFields',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'embedIds' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mentionedMembers' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'primaryReactionType',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastActivityAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'language' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'customSeoDetail' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'CustomSeoDetailFields',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'relativeUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'attachments' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'extension' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'size' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'downloadUrl',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authMemberProps' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'context' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'scopes' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'subscribed' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'permissions',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'isAuthorized',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'authorized',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'reason',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'inputPermissions',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'path',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'isAuthorized',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'authorized',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'reason',
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'outputPermissions',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'path',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'isAuthorized',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'authorized',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'reason',
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'availableReplyTypes',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'archived',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'allowedEmojis',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'context',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'forbiddenEmojis',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'languageTemplate',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'description',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nativeFieldsTemplates',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'description',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'thumbnailId',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'title',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'negativeReactions',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'pluralName',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'positiveReactions',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'primaryReactionType',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'shortContentTemplate',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'singleChoiceReactions',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'allowedReactions',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'customReactions',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'activeColor',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'activeGlyphId',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'activeName',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'color',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'glyphId',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'key',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'name',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'slug' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'titleTemplate',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'mappings',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'key',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'field',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'type',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'title',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'description',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'required',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'isMainContent',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'isSearchable',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'default',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'canReact' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'owner' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'member' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'displayName',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'name' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'locale',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'profilePictureId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'bannerId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'status',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'username',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'emailStatus',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'newEmail',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'tagline',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'lastSeenAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'relativeUrl',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'url' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'externalId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'roleId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'flagged',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'teammate',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'staffReasons',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'profilePicture',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'FragmentSpread',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'ImageFields',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'badges',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'FragmentSpread',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'MemberBadgeFields',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'embeds' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'author' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'author_url' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'html' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'provider_name',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnail_height',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnail_url',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnail_width',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'mentions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'displayName',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'locale' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'profilePictureId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bannerId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'status' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'username' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'emailStatus',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'newEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tagline' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lastSeenAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'relativeUrl',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'externalId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'roleId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'flagged' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teammate' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'staffReasons',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reactions' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'count' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reacted' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reaction' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'participants',
                                    },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'limit' },
                                        value: {
                                          kind: 'IntValue',
                                          value: '10',
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nodes',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'participant',
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'id',
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'name',
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageInfo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'endCursor' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'hasNextPage' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pinnedReplies' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mappingFields' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'key' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fields' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'PostFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postTypeId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasMoreContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAnonymous' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHidden' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publishedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ownerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'spaceId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pinnedInto' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliesCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRepliesCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliedToIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliedToId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnail' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GlyphFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'embedIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mentionedMembers' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'primaryReactionType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastActivityAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customSeoDetail' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: {
                                kind: 'Name',
                                value: 'CustomSeoDetailFields',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attachments' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'extension' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'size' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'downloadUrl' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'owner' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'member' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'displayName',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'locale' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'profilePictureId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bannerId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'status' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'username' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'emailStatus',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'newEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tagline' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lastSeenAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'relativeUrl',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'externalId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'roleId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'flagged' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'teammate' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'staffReasons',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'profilePicture',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ImageFields',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'badges' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'MemberBadgeFields',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'embeds' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'author' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'author_url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'html' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'provider_name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'thumbnail_height' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'thumbnail_url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'thumbnail_width' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mentions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'displayName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'locale' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'profilePictureId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bannerId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'status' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'emailStatus' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'newEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tagline' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastSeenAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'relativeUrl' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'externalId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'roleId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'flagged' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'teammate' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'staffReasons' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dominantColorHex' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'urls' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                { kind: 'Field', name: { kind: 'Name', value: 'small' } },
                { kind: 'Field', name: { kind: 'Name', value: 'medium' } },
                { kind: 'Field', name: { kind: 'Name', value: 'large' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FileFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'File' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'downloadUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'extension' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'status' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EmojiFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Emoji' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'text' } }],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'GlyphFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Glyph' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SlateFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Slate' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'rootBlock' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blocks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'children' } },
                { kind: 'Field', name: { kind: 'Name', value: 'extraProps' } },
                { kind: 'Field', name: { kind: 'Name', value: 'output' } },
                { kind: 'Field', name: { kind: 'Name', value: 'props' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'restrictions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonEditableBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lockedChildrenBlocks' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nonRemovableBlocks' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'externalKeys' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'required' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'typeOptions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'dateType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'numberType' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relationType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'richTextType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'textType' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'customErrorMessage' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'validation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseCustomFieldFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BaseCustomFieldSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'FragmentSpread',
            name: { kind: 'Name', value: 'NonRecursiveBaseCustomFieldFields' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'properties' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'NonRecursiveBaseCustomFieldFields',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NonRecursiveBaseCustomFieldFields',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomFieldsSchema' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
                { kind: 'Field', name: { kind: 'Name', value: 'required' } },
                { kind: 'Field', name: { kind: 'Name', value: 'searchable' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'settings' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'typeOptions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dateType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'numberType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relationType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'richTextType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'textType' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'validators' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customErrorMessage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'validation' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'writePrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'readPrivacy' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'allow' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'default' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'externalKeys' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BaseCustomFieldFields' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Badge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'active' } },
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'settings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomSeoDetailFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomSeoDetail' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'noIndex' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'CustomField' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'key' } },
          { kind: 'Field', name: { kind: 'Name', value: 'value' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'relationEntities' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'medias' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FileFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'EmojiFields' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'GlyphFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'members' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bannerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'blockedMemberIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'emailStatus' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'flagged' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastSeen' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastSeenAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locale' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'newEmail' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'overrideTeammate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profilePicture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'profilePictureId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'roleId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'score' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'staffReasons' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tagline' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'teammate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timeZone' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'verifiedAt' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allowedEmojis' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allowedReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attachmentIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'embedIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'forbiddenEmojis' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'forbiddenReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasMoreContent' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAnonymous' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHidden' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'language' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastActivityAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'locked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'mentionedMembers' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'negativeReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'negativeReactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ownerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pinnedInto' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'positiveReactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'positiveReactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postTypeId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'primaryReactionType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'publishedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reactionsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliedToId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliedToIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'repliesCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shortContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'singleChoiceReactions' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'spaceId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tagIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'textContent' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'thumbnailId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topicIds' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalRepliesCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'spaces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bannerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdById' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'customOrderingIndexInGroup',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'groupId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hidden' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'highlightedTagIds' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GlyphFields' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'imageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inviteOnly' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHomepage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isNewUserHomepage' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'isReturningUserHomepage',
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'layout' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'membersCount' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'networkId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nonAdminsCanInvite' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postsCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'private' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'relativeUrl' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'subscribersCount' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanPost' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanReact' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'whoCanReply' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'spaceId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostTypeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostType' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'archived' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'pluralName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'context' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'allowedReactions' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'primaryReactionType' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'singleChoiceReactions' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customReactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'activeColor' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activeGlyphId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activeName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'glyphId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableSpaces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EmojiFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'GlyphFields' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'postFields' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomFieldsSchemaFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'validReplyTypes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'icon' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'MemberBadgeFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'MemberBadge' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'backgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'badgeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'textColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'badge' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BadgeFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SpaceFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Space' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } },
          { kind: 'Field', name: { kind: 'Name', value: 'layout' } },
          { kind: 'Field', name: { kind: 'Name', value: 'private' } },
          { kind: 'Field', name: { kind: 'Name', value: 'groupId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'hidden' } },
          { kind: 'Field', name: { kind: 'Name', value: 'inviteOnly' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'nonAdminsCanInvite' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customOrderingIndexInGroup' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
          { kind: 'Field', name: { kind: 'Name', value: 'networkId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isHomepage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'membersCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'postsCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdById' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanPost' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReact' } },
          { kind: 'Field', name: { kind: 'Name', value: 'whoCanReply' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'address' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                { kind: 'Field', name: { kind: 'Name', value: 'exact' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customSeoDetail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CustomSeoDetailFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slate' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'SlateFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'banner' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EmojiFields' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'GlyphFields' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'highlightedTags' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'collection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'relativeUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMemberProps' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'context' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'membershipStatus' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'subscribed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availablePostTypes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'permissions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAuthorized' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorized' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reason' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'inputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'outputPermissions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'path' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAuthorized' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'authorized' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reason' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostSsrDataQuery, PostSsrDataQueryVariables>
export const SsoDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SsoData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SsoStatus' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ssos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorizationUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'buttonText' } },
                { kind: 'Field', name: { kind: 'Name', value: 'clientId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'clientSecret' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'idpUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'logoutUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'provider' } },
                { kind: 'Field', name: { kind: 'Name', value: 'scopes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'settingsUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'signUpUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'tokenUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'userProfileUrl' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'defaultRelayState' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'allowSignUp' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SsoDataQuery, SsoDataQueryVariables>
export const RedirectDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Redirect' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'redirect' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'url' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'url' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'resolvedUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RedirectQuery, RedirectQueryVariables>
export const AuthMemberToVerifyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AuthMemberToVerify' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authMember' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AuthMemberToVerifyQuery,
  AuthMemberToVerifyQueryVariables
>
export const AuthVerifyMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AuthVerifyMember' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'VerifyMemberInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'verifyMember' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'member' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AuthVerifyMemberMutation,
  AuthVerifyMemberMutationVariables
>
export const VerifyMemberDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VerifyMember' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'VerifyMemberInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'verifyMember' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'refreshToken' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VerifyMemberMutation,
  VerifyMemberMutationVariables
>
