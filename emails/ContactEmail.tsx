import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";

type Props = { email: string; message: string };

export default function ContactEmail({ email, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>{message.slice(0, 90)}</Preview>
      <Body style={{ backgroundColor: "#f5f2ec", fontFamily: "Georgia, serif", color: "#16181c" }}>
        <Container style={{ maxWidth: 560, padding: "32px 24px" }}>
          <Section style={{ backgroundColor: "#fbf9f5", border: "1px solid #e4e0d8", borderRadius: 16, padding: "8px 28px" }}>
            <Text style={{ fontSize: 13, color: "#5e6066", fontFamily: "system-ui, sans-serif" }}>From {email}</Text>
            <Text style={{ fontSize: 16, lineHeight: "26px", whiteSpace: "pre-wrap" }}>{message}</Text>
            <Hr style={{ borderColor: "#e4e0d8" }} />
            <Text style={{ fontSize: 12, color: "#8b8d92", fontFamily: "system-ui, sans-serif" }}>
              Sent from the contact form. Reply to answer them directly.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
