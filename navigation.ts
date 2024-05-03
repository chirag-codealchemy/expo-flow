import {CommonActions, NavigationProp, NavigatorScreenParams, RouteProp} from '@react-navigation/native';

import {DYNAMIC_LINK_TYPE} from '@utils/dynamicLinksHelper';

import {NAVIGATE_FROM} from '@constants/enum';

export type RootStackParamList = {
  AccountScreen: undefined;
  AdmissionCalcResults: {AcceptanceRate: number; collegeDetailData: any; from: any; citizenshipType: string};
  Blog: undefined;
  BlogComments: {POST_ID: string};
  BlogDetails: {navigate_from: keyof typeof NAVIGATE_FROM; POST_ID: string};
  BlogExplore: undefined;
  BlogList: {title: string};
  ChangePassword: undefined;
  ChangePasswordComplete: undefined;
  ChoosePlan: {navigate_from: keyof typeof NAVIGATE_FROM; screenName?: string};
  ChoosePlanIOS: {navigate_from: keyof typeof NAVIGATE_FROM; screenName?: string};
  CollegeComparison: {College: any};
  CollegeShortlist: {selectedCollege: {name: string; US_Col: number}};
  CommunityDetailsScreen: {communityId: string};
  CommunityScreen: undefined;
  Consultancy: undefined;
  DetailPostScreen: {postId: string; onRefresh?: () => void; setParentItemObj?: (v: any) => void};
  DiscussionBoard: undefined;
  DrawerNavigation: NavigatorScreenParams<DrawerParamList>;
  ExploreAllScreen: {type: string};
  ForgetPassword: undefined;
  GPAConvertor: undefined;
  GenerateGPA: {Category: any};
  IntroScreen: undefined;
  LoginScreen: undefined;
  Me: undefined;
  NetPriceCalc: {collegeList: any[]; citizenshipType: string};
  NetPriceCollegeList: {collegeList: any[]; citizenshipType: string};
  Notification: undefined;
  OtpScreen: undefined;
  ProfileDetails: undefined;
  SearchEvent: undefined;
  SignUp: undefined;
  SplashScreen: undefined;
  TermsPolicy: {type: 'Terms' | 'Policy'};
  Topics: {userData: any};
  USCollegeDetail: {from?: string; citizenshipType?: string; collegeDetailData: any};
  UserDetails: {userPersonalSection: any};
  VideoLesson: {event_id: string; id: string; type: string};
  VideoLessonCategoryDetails: undefined;
  VideoSeries: {type?: string; sourceID?: string; event?: any};
  Zoom: {event: any; zoomId: string; zoomPass: string};
};

export type DrawerParamList = {
  TabNavigation: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  Home: undefined;
  MyListScreen: undefined;
  ContactUs: {navigate_from?: keyof typeof NAVIGATE_FROM; formData?: {enquiry: ''; card: ''}};
  ReferralScreen: undefined;
  RoadMap: {route?: string};
  SuccessStories: undefined;
  Tools: undefined;
  VideoDetail: {
    event?: any;
    sourceID?: any;
    eventID?: string;
    relatedVideo?: any[];
    type?: keyof typeof DYNAMIC_LINK_TYPE;
    navigate_from?: keyof typeof NAVIGATE_FROM;
  };
};

export type MergeScreens = RootStackParamList & DrawerParamList & TabParamList;

export type Reset = (
  val: Extract<CommonActions.Action, {type: 'RESET'}>['payload'] & {
    routes?: {[Property in keyof MergeScreens as string]?: {name: Property; params?: MergeScreens[Property]}}[string][];
  },
) => CommonActions.Action;

export type UseNavigation = NavigationProp<MergeScreens>;

export type UseRoute<T extends keyof MergeScreens> = RouteProp<MergeScreens, T>;

export type MyScreenTab = {
  lessons: {type: 'masterclass'};
  liveLessons: {type: 'livestream'};
};
