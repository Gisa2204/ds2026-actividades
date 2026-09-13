import { useParams } from "react-router-dom";


function LibroDetalle() {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h1>Detalle de libro {id}</h1>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit urna molestie neque tincidunt, ut eleifend est dignissim. Suspendisse arcu arcu, semper ac rhoncus at, fringilla venenatis nisl. Donec vitae nibh sed sapien convallis pharetra. Aenean maximus at diam ac sollicitudin. Ut eu mauris id lacus fringilla malesuada non quis neque. Sed sed augue nec ex sollicitudin commodo. Nunc volutpat scelerisque nulla, id rhoncus tortor volutpat id. Aenean et placerat eros. Nulla lobortis tellus massa, sit amet pretium metus ullamcorper et. Mauris facilisis lectus eget sem mollis finibus. Maecenas mi elit, interdum vel sollicitudin id, ultrices sit amet leo. Cras sit amet nisi sed est pellentesque bibendum. Ut mattis suscipit hendrerit. Nam congue, arcu sed mattis rutrum, sapien augue fermentum libero, nec efficitur risus massa non ipsum. Aliquam rhoncus justo sed purus sagittis, et iaculis purus venenatis. Mauris vel tellus quis sem vestibulum molestie nec pharetra nisl.
                Sed dictum aliquam blandit. Praesent ac placerat orci, non aliquam velit. Pellentesque scelerisque metus sed mauris auctor, vel consectetur nisi ornare. Aliquam molestie non leo a porta. Fusce porta vel orci id porttitor. Aenean vehicula accumsan nibh in sagittis. Duis vitae mauris dapibus, vehicula purus vel, consequat libero. Quisque nisl tellus, pulvinar quis sodales vitae, venenatis eu purus. Aenean gravida ex arcu, in iaculis elit posuere vel.
                Quisque finibus tellus sed nisl rhoncus pretium. Nunc maximus, arcu vel ultrices lacinia, turpis ante finibus augue, ac posuere mauris quam ut enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla feugiat neque, in finibus diam maximus nec. Suspendisse quis purus in orci scelerisque tristique. Donec mattis dui odio, nec pretium felis placerat tristique. Suspendisse id aliquet orci, eget finibus diam. Nullam euismod venenatis turpis quis iaculis. Sed sed ex in dolor mollis sagittis. Quisque congue luctus dolor non bibendum. Maecenas et tellus sit amet neque cursus pulvinar vitae sit amet est.
            </h2>
        </>
    );
}

export default LibroDetalle;