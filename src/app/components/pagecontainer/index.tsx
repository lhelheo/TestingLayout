interface PageContainerProps {
    children: React.ReactNode;
}


export default function PageContainer(props: PageContainerProps) {
  return (
    <>
        <div className='p-5 flex flex-col justify-center h-full'>
            {props.children}
        </div>
    </>
  )
}
