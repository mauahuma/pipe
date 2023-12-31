import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Label } from "semantic-ui-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CakeSemana() {
  const [estado, setEstado] = useState([]);
  const [numero_mesa, setNumero_mesa] = useState([]);

  const peticionApi = async () => {
    await axios.get("http://127.0.0.1:8000/api/pagos/").then((Response) => {
      var respuesta = Response.data;
      var auxEstado = [],
        auxNumero_mesa = [];
      let result = Object.values(
        respuesta.reduce((c, { tipoPago }) => {
          c[tipoPago] = c[tipoPago] || {
            name: tipoPago,
            value: 0,
          };
          c[tipoPago].value++;
          return c;
        }, {})
      );

      result.map((elemento) => {
        auxEstado.push(elemento.name);
        auxNumero_mesa.push(elemento.value);
      });
      setEstado(auxEstado);
      setNumero_mesa(auxNumero_mesa);
    });
  };
  useEffect(() => {
    peticionApi();
  }, []);

  const data = {
    labels: estado,
    datasets: [
      {
        label: "Ejemplo",
        data: numero_mesa,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Label>Numero de ventas segun metodo de pago</Label>
      <Pie data={data} />
    </div>
  );
}
