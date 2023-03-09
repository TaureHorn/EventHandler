// component to collate simple cards into one view and show in main route
import { Container, Row } from "react-bootstrap"
import DetailedCard from "./cardDetailed.component"
import SimpleCard from "./cardSimple.component"

function Overview(props) {
    // const simpleCards = "" need to define and write logic to collate simpleCard data
    return (

        <Row>
            <SimpleCard />
            <br />
            <DetailedCard />
        </Row>
    )
}

export default Overview