import Cookies from 'universal-cookie'
import firebase from '../firebaseConfig'
import { unSubMeta } from './useUserChanged'

const cookie = new Cookies()

export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta()
    }
    await firebase.auth().signOut()
    cookie.remove('token')
  }

  return { logout }
}
