interface TaskProps {
  titulo: string;
  descricao: string;
  data: string;
  status: boolean;
}

export function Task(props: TaskProps) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
      <p>{props.data}</p>
      <p>
        <input type="checkbox" name="status" checked={props.status}/>Feito</p>
    </div>
  );
}