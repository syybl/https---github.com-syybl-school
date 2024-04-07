import { useWelcomeStore } from '@/stores/useWelcomeStrore'
import { exceedMathMax } from '@pureadmin/utils'

class Welcome {
    WelcomeStore
    constructor(){
        this.WelcomeStore = useWelcomeStore()
    }
    
}

export default Welcome;
