"use client";
import React from "react";
import "../../components/tabbing-table/tabbing-table.scss";
import Image from "next/image";
import pdfIcon from '../../../public/images/pdf-icon.svg';
import boatIcon from "../../../public/images/boat-icon.svg";


export default function TabbingTable({rows}) {
    return(
        <>
            <div className="table-responsive">
                <table className="tableCustom">
                    
                    <tbody>
                        {rows.map((rows, index) => (
                            <tr key={index}>
                                {/* {columns.map((col, cidx) => (
                                    <td key={cidx}>{row[col]}</td>
                                ))} */}
                                <td>{rows.title}</td>
                                <td>
                                    {/* {rows.link ? (
                                        <a href={rows.link} target="_blank"> <Image src={pdfIcon} alt={pdfIcon}/> View Details</a>
                                    ): (
                                        ''
                                    )} */}
                                    <a href={rows.link} target="_blank"> <Image src={rows.icon} alt={rows.icon}/> View Details</a>
                                    
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </>
    )

}