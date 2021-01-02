export const fadeIn =  {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        duration: {
            transition: 0.75
        }
    },
    exit: {
        opacity: 0,
        duration: {
            transition: 0.75
        }
    }
}
export const popup =  {
    hidden: {
        opacity: 0, 
        scale: 0.5
    },
    show: {
        opacity: 1,
        scale: 1,
        duration: {
            transition: 0.75
        }
    },
    exit: {
        opacity: 0,
        duration: {
            transition: 0.75
        }
    }
}