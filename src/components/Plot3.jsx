import Plot from 'react-plotly.js'

const Plot3 = () => {
  return (
    <Plot
      data={[
        {
          line: {
            color: 'rgb(255, 255, 255)',
            width: 7
          },
          meta: {
            columnNames: {
              x: 'B',
              y: 'C'
            }
          },
          mode: 'lines',
          type: 'scatter',
          xsrc: 'julius.jeffreys:0:be060c',
          x: [
            '09:00',
            '09:15',
            '09:30',
            '09:45',
            '10:00',
            '10:15',
            '10:30',
            '10:45',
            '11:00',
            '11:15',
            '11:30',
            '11:45',
            '12:00',
            '12:15',
            '12:30',
            '12:45',
            '13:00',
            '13:15',
            '13:30',
            '13:45',
            '14:00',
            '14:15',
            '14:30',
            '14:45',
            '15:00',
            '15:15',
            '15:30',
            '15:45'
          ],
          ysrc: 'julius.jeffreys:0:a37efe',
          y: [
            '1.50',
            '1.48',
            '1.49',
            '1.43',
            '1.42',
            '1.42',
            '1.45',
            '1.47',
            '1.50',
            '1.55',
            '1.52',
            '1.56',
            '1.60',
            '1.88',
            '1.42',
            '1.50',
            '1.51',
            '1.53',
            '1.48',
            '1.42',
            '1.42',
            '1.50',
            '1.55',
            '1.62',
            '1.42',
            '1.50'
          ],
          showlegend: false
        },
        {
          meta: {
            columnNames: {
              x: 'B',
              y: 'C'
            }
          },
          mode: 'markers',
          type: 'scatter',
          xsrc: 'julius.jeffreys:0:be060c',
          x: [
            '09:00',
            '09:15',
            '09:30',
            '09:45',
            '10:00',
            '10:15',
            '10:30',
            '10:45',
            '11:00',
            '11:15',
            '11:30',
            '11:45',
            '12:00',
            '12:15',
            '12:30',
            '12:45',
            '13:00',
            '13:15',
            '13:30',
            '13:45',
            '14:00',
            '14:15',
            '14:30',
            '14:45',
            '15:00',
            '15:15',
            '15:30',
            '15:45'
          ],
          ysrc: 'julius.jeffreys:0:a37efe',
          y: [
            '1.50',
            '1.48',
            '1.49',
            '1.43',
            '1.42',
            '1.42',
            '1.45',
            '1.47',
            '1.50',
            '1.55',
            '1.52',
            '1.56',
            '1.60',
            '1.88',
            '1.42',
            '1.50',
            '1.51',
            '1.53',
            '1.48',
            '1.42',
            '1.42',
            '1.50',
            '1.55',
            '1.62',
            '1.42',
            '1.50'
          ],
          marker: {
            size: 3,
            color: 'rgb(165, 0, 0)'
          },
          showlegend: false
        }
      ]}
      layout={{
        title: {
          text: '<br>'
        },
        width: 1200,
        height: 600,
        xaxis: {
          type: 'category',
          range: [-0.5, 27.5],
          title: {
            font: {
              size: 16
            },
            text: '<br>'
          },
          tickfont: {
            size: 14
          },
          autorange: false
        },
        yaxis: {
          type: 'linear',
          range: [1.1, 2.1],
          title: {
            font: {
              size: 16
            },
            text: '<br>'
          },
          tickfont: {
            size: 14
          },
          tickmode: 'auto',
          autorange: false,
          tickformat: '',
          tickprefix: '$'
        },
        margin: {
          b: 0,
          l: 20,
          r: 20,
          t: 30
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
                  fill: {
                    color: 'rgb(237,237,237)'
                  },
                  line: {
                    color: 'white'
                  }
                },
                header: {
                  fill: {
                    color: 'rgb(217,217,217)'
                  },
                  line: {
                    color: 'white'
                  }
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
            geo: {
              bgcolor: 'white',
              showland: true,
              lakecolor: 'white',
              landcolor: 'rgb(237,237,237)',
              showlakes: true,
              subunitcolor: 'white'
            },
            font: {
              color: 'rgb(51,51,51)'
            },
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
              line: {
                width: 0
              },
              opacity: 0.3,
              fillcolor: 'black'
            },
            annotationdefaults: {
              arrowhead: 0,
              arrowwidth: 1
            }
          },
          themeRef: 'GGPLOT2'
        },
        plot_bgcolor: 'rgb(245, 191, 191)'
      }}
    />
  )
}

export default Plot3
