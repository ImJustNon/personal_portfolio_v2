export function toastSuccess(title, description){
    return {
        title: (title),
        description: (description),
        status: 'success',
        duration: 2500,
        isClosable: true,
        position: "bottom-left"
    }
}