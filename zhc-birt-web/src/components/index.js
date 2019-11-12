
import Charts from './Charts'
import ImageTitle from './ImageTitle'
const cmps= {
    ImageTitle
};
if(window&&window.Vue){
    for(var key in cmps){        
        Vue.component(key, cmps[key]); 
    }
}
export default {
    ...cmps,
    Charts
};