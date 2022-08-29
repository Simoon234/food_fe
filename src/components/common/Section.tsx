import {ReactNode} from "react";
import styled from "styled-components";

export interface Props {
    children: ReactNode
}

export const SectionLayout = ({children}: Props) => {
    return (
        <Section>
            {children}
        </Section>
    )
}


export const Section = styled.div`
  min-height: 90vh;
  padding-top: 2rem;
`