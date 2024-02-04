export interface portfolioProps {
    id:string ,
    image:string,
    name:string,
    path:string ,
    category:string
}

export const Projects = [
    {
        id:'01',
        image:require('../../public/projectImages/kayIncproject.png'),
        name:'kayinc-project',
        path:"https://kayinc.vercel.app",
        category : 'e-commerce'
    },
    {
        id:'02',
        image:require('../../public/projectImages/kkooproject.png'),
        name:'kkoo-e-commerce-project',
        path:"https://kkoo.netlify.app" ,
        category : 'e-commerce'
    },
    {
        id:'03',
        image:require('../../public/projectImages/afyatipsBlogproject.png'),
        name:'afyatipsblog-project',
        path:"https://afyatips.vercel.app" ,
        category : 'blog'
    }
]