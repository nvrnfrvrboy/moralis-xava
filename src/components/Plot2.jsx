import Plot from 'react-plotly.js'

const Plot2 = () => {
  return (
    <Plot
      data={[
        {
          line: { color: 'rgb(255, 255, 255)', width: 9 },
          meta: { columnNames: { x: 'B', y: 'C' } },
          mode: 'lines',
          type: 'scatter',
          xsrc: 'julius.jeffreys:0:be060c',
          x: [
            '20-02-2022',
            '20-03-2022',
            '19-04-2022',
            '19-05-2022',
            '19-06-2022',
            '19-07-2022'
          ],
          ysrc: 'julius.jeffreys:0:a37efe',
          y: ['1.50', '1.45', '2.20', '2.15', '2.10', '2.08'],
          showlegend: false
        },
        {
          meta: { columnNames: { x: 'B', y: 'C' } },
          mode: 'markers',
          type: 'scatter',
          xsrc: 'julius.jeffreys:0:be060c',
          x: [
            '20-02-2022',
            '20-03-2022',
            '19-04-2022',
            '19-05-2022',
            '19-06-2022',
            '19-07-2022'
          ],
          ysrc: 'julius.jeffreys:0:a37efe',
          y: ['1.50', '1.45', '2.20', '2.15', '2.10', '2.08'],
          marker: { size: 16, color: 'rgb(165, 0, 0)' },
          showlegend: false
        }
      ]}
      layout={{
        title: 'HeC Spot Price: $1.50 -> HeC Vesting Token Prices:',
        width: 1300,
        height: 500,
        xaxis: {
          type: 'category',
          range: [-0.5, 5.5],
          title: { font: { size: 16 }, text: 'Unlock Date' },
          tickfont: { size: 14 },
          autorange: false
        },
        yaxis: {
          type: 'linear',
          range: [0, 3],
          title: { font: { size: 16 }, text: 'Price' },
          tickfont: { size: 14 },
          tickmode: 'auto',
          autorange: false,
          tickformat: '',
          tickprefix: '$'
        },
        autosize: true,
        template: {
          data: {
            bar: [
              {
                type: 'bar',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            table: [
              {
                type: 'table',
                cells: {
                  fill: { color: 'rgb(237,237,237)' },
                  line: { color: 'white' }
                },
                header: {
                  fill: { color: 'rgb(217,217,217)' },
                  line: { color: 'white' }
                }
              }
            ],
            carpet: [
              {
                type: 'carpet',
                aaxis: {
                  gridcolor: 'white',
                  linecolor: 'white',
                  endlinecolor: 'rgb(51,51,51)',
                  minorgridcolor: 'white',
                  startlinecolor: 'rgb(51,51,51)'
                },
                baxis: {
                  gridcolor: 'white',
                  linecolor: 'white',
                  endlinecolor: 'rgb(51,51,51)',
                  minorgridcolor: 'white',
                  startlinecolor: 'rgb(51,51,51)'
                }
              }
            ],
            mesh3d: [
              {
                type: 'mesh3d',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                }
              }
            ],
            contour: [
              {
                type: 'contour',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                },
                autocolorscale: true
              }
            ],
            heatmap: [
              {
                type: 'heatmap',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                },
                autocolorscale: true
              }
            ],
            scatter: [
              {
                type: 'scatter',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            surface: [
              {
                type: 'surface',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                }
              }
            ],
            heatmapgl: [
              {
                type: 'heatmapgl',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                }
              }
            ],
            histogram: [
              {
                type: 'histogram',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            parcoords: [
              {
                line: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                },
                type: 'parcoords'
              }
            ],
            scatter3d: [
              {
                type: 'scatter3d',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            scattergl: [
              {
                type: 'scattergl',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            choropleth: [
              {
                type: 'choropleth',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                }
              }
            ],
            scattergeo: [
              {
                type: 'scattergeo',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            histogram2d: [
              {
                type: 'histogram2d',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                },
                autocolorscale: true
              }
            ],
            scatterpolar: [
              {
                type: 'scatterpolar',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            contourcarpet: [
              {
                type: 'contourcarpet',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                }
              }
            ],
            scattercarpet: [
              {
                type: 'scattercarpet',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            scattermapbox: [
              {
                type: 'scattermapbox',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            scatterpolargl: [
              {
                type: 'scatterpolargl',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            scatterternary: [
              {
                type: 'scatterternary',
                marker: {
                  colorbar: {
                    len: 0.2,
                    ticks: 'inside',
                    ticklen: 6,
                    tickcolor: 'rgb(237,237,237)',
                    outlinewidth: 0
                  }
                }
              }
            ],
            histogram2dcontour: [
              {
                type: 'histogram2dcontour',
                colorbar: {
                  len: 0.2,
                  ticks: 'inside',
                  ticklen: 6,
                  tickcolor: 'rgb(237,237,237)',
                  outlinewidth: 0
                },
                autocolorscale: true
              }
            ]
          },
          layout: {
            width: 720,
            geo: {
              bgcolor: 'white',
              showland: true,
              lakecolor: 'white',
              landcolor: 'rgb(237,237,237)',
              showlakes: true,
              subunitcolor: 'white'
            },
            font: { color: 'rgb(51,51,51)' },
            polar: {
              bgcolor: 'rgb(237,237,237)',
              radialaxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)'
              },
              angularaxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)'
              }
            },
            scene: {
              xaxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                gridwidth: 2,
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)',
                zerolinecolor: 'white',
                showbackground: true,
                backgroundcolor: 'rgb(237,237,237)'
              },
              yaxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                gridwidth: 2,
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)',
                zerolinecolor: 'white',
                showbackground: true,
                backgroundcolor: 'rgb(237,237,237)'
              },
              zaxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                gridwidth: 2,
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)',
                zerolinecolor: 'white',
                showbackground: true,
                backgroundcolor: 'rgb(237,237,237)'
              }
            },
            xaxis: {
              ticks: 'outside',
              showgrid: true,
              gridcolor: 'white',
              linecolor: 'white',
              tickcolor: 'rgb(51,51,51)',
              automargin: true,
              zerolinecolor: 'white'
            },
            yaxis: {
              ticks: 'outside',
              showgrid: true,
              gridcolor: 'white',
              linecolor: 'white',
              tickcolor: 'rgb(51,51,51)',
              automargin: true,
              zerolinecolor: 'white'
            },
            ternary: {
              aaxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)'
              },
              baxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)'
              },
              caxis: {
                ticks: 'outside',
                showgrid: true,
                gridcolor: 'white',
                linecolor: 'white',
                tickcolor: 'rgb(51,51,51)'
              },
              bgcolor: 'rgb(237,237,237)'
            },
            colorway: ['#F8766D', '#A3A500', '#00BF7D', '#00B0F6', '#E76BF3'],
            hovermode: 'closest',
            colorscale: {
              diverging: [
                [0, '#40004b'],
                [0.1, '#762a83'],
                [0.2, '#9970ab'],
                [0.3, '#c2a5cf'],
                [0.4, '#e7d4e8'],
                [0.5, '#f7f7f7'],
                [0.6, '#d9f0d3'],
                [0.7, '#a6dba0'],
                [0.8, '#5aae61'],
                [0.9, '#1b7837'],
                [1, '#00441b']
              ],
              sequential: [
                [0, 'rgb(20,44,66)'],
                [1, 'rgb(90,179,244)']
              ],
              sequentialminus: [
                [0, 'rgb(20,44,66)'],
                [1, 'rgb(90,179,244)']
              ]
            },
            plot_bgcolor: 'rgb(237,237,237)',
            paper_bgcolor: 'white',
            shapedefaults: {
              line: { width: 0 },
              opacity: 0.3,
              fillcolor: 'black'
            },
            annotationdefaults: { arrowhead: 0, arrowwidth: 1 }
          },
          themeRef: 'GGPLOT2'
        },
        plot_bgcolor: 'rgb(245, 191, 191)'
      }}
    />
  )
}

export default Plot2
