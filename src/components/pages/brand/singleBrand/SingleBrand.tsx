import {BrandLayout} from "../brandLayout";
import "./singleBrand.css"
import {BrandDesc} from "../brandDesc";

function SingleBrand() {
    return (
        <div className="theone">
            <BrandDesc />
            <BrandLayout />
        </div>
    )
}

export default SingleBrand