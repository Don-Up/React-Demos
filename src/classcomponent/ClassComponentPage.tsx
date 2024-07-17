import {Component} from "react";

interface ClassComponentPageProps{
    data: string[]
    setData: (data: string[]) => void
}

interface ClassComponentPageState{
    localData: string[]
}


class ClassComponentPage extends Component<ClassComponentPageProps, ClassComponentPageState> {
    constructor(props: ClassComponentPageProps) {
        super(props);
        this.state = {
            localData: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const fetchedData = ["Item 1", "Item 2", "Item 3"]
            this.props.setData(fetchedData)
        }, 1000)
    }

    handleAddLocalData = () => {
        this.setState({
            localData: [...this.state.localData, `Local Item ${this.state.localData.length+1}`]
        })
    }

    render() {
        const {data} = this.props
        const {localData} = this.state

        return (
            <div className={"p-8"}>
                <h1 className="text-2xl font-bold">Class Component Page</h1>
                <div>
                    <h2 className="text-xl">Redux Data</h2>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={this.handleAddLocalData}
                    >
                        Add Local Data
                    </button>
                </div>
                <div>
                    <h2 className="text-xl">Local Data</h2>
                    <ul>
                        {localData.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ClassComponentPage