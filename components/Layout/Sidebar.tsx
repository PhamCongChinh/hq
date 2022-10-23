

const Sidebar = (props: any): JSX.Element => {
    let data = props.data
    /*let listItems = data?(
        Object.keys(data).map((item) => (
            <li key={data[item].id}>{data[item].name}</li>
        ))
    ):(
        <div>Loading...</div>
    )*/
    return (
        <div className="hidden md:grid bg-white">
            <div className="bg-blue-500 text-center text-sm text-white py-2">
                <p className="font-semibold">Danh mục sản phẩm</p>
            </div>
            <ul className="">
                {data ? (
                    Object.keys(data).map((item) => (
                        <li key={data[item].id} className="border-b">
                            <p className="px-3 py-1">{data[item].name}</p>
                        </li>
                    ))
                ) : (
                    <div>Đang tải...</div>
                )}
            </ul>
            <hr />
            <div className="bg-blue-500 text-center text-sm text-white py-2">
                <p className="font-semibold">Bán chạy nhất</p>
            </div>
            <ul className="">
                {data ? (
                    Object.keys(data).map((item) => (
                        <li key={data[item].id} className="border-b">
                            <p className="px-3 py-1">{data[item].name}</p>
                        </li>
                    ))
                ) : (
                    <div>Đang tải...</div>
                )}
            </ul>
        </div>
    )
}

export default Sidebar