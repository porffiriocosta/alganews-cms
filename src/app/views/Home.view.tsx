import usePageTitle from "../../core/hooks/usePageTitle"
import ErrorBoundary from "../components/ErrorBoundary"
import PostList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserTopTags from "../features/UserTopTags"
import DefaultLayout from "../layouts/Default.layout"

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
      <UserTopTags />
      <UserEarnings />
    </div>
    <ErrorBoundary component={'performance'}>
      <UserPerformance />
    </ErrorBoundary>
    <ErrorBoundary component={'lista de posts'}>
      <PostList />
    </ErrorBoundary>
  </DefaultLayout>
}