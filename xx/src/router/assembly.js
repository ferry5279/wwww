import Loadable from '@@/Loadable'
const Home = Loadable(() =>
    import ('@/pages/home'))
const Pin = Loadable(() =>
    import ('@/pages/pin'))
const Detail = Loadable(() =>
    import ('@/pages/detail'))
export {
    Home,
    Pin,
    Detail
}