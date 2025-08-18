from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('legion_neuromarketing.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize LLM with proxy API
llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
    base_url=os.getenv("OPENAI_API_BASE"),
    temperature=0.7,
    verbose=True
)

def analyze_neuromarketing_strategy():
    """Analyzes LEGION website from neuromarketing perspective"""
    logger.info("🧠 Analyzing LEGION neuromarketing strategy...")
    
    system_prompt = """You are a senior neuromarketing specialist and conversion optimization expert with 15+ years of experience. 
    You specialize in B2B lead generation and understand the psychology of business decision-makers.
    
    Analyze the LEGION personnel outsourcing business and provide:
    1. **CRITICAL PRIORITY** actions (implement first for maximum impact)
    2. **HIGH PRIORITY** optimizations 
    3. **MEDIUM PRIORITY** improvements
    
    For each recommendation provide:
    - Psychological reasoning
    - Expected conversion impact
    - Implementation difficulty (Easy/Medium/Hard)
    - Time to implement
    
    Focus on:
    - Lead magnets and tripwires
    - Trust signals and social proof
    - Psychological triggers
    - Form placement and design
    - Content psychology
    - User experience optimization
    
    Target audience: Business leaders, HR managers, personnel directors
    Pain points: Time shortage, hiring risks, rapid scaling needs
    
    Provide actionable, measurable recommendations ready for immediate implementation."""
    
    business_context = """
    LEGION - Personnel outsourcing company in Novosibirsk, Russia
    
    Current Website Issues:
    - Low lead conversion rate
    - Visitors don't leave contact info without strong reasons
    - Need to maximize lead generation from anonymous visitors
    
    Business Model:
    - Linear personnel outsourcing (loaders, pickers, cleaners)
    - Staff from 350 rubles/hour
    - Deployment within 3 hours or 2 days
    - 24/7 support, medical documents included
    
    Target Market: Novosibirsk and surrounding areas
    Competitive Advantages: Speed, quality, legal compliance, scalability
    
    Goal: Convert anonymous visitors into qualified leads (phone numbers) for sales team
    """
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Business context: {business_context}")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Neuromarketing analysis completed")
    return response.content

def generate_lead_magnet_strategy():
    """Generates specific lead magnet and tripwire strategy"""
    logger.info("🎯 Generating lead magnet strategy...")
    
    system_prompt = """You are a lead generation expert specializing in B2B services. 
    
    Design a comprehensive lead magnet and tripwire strategy for LEGION that will:
    1. Provide immediate value to visitors
    2. Build trust and authority
    3. Capture contact information naturally
    4. Qualify leads for sales team
    
    Include:
    - Specific lead magnet ideas with psychological triggers
    - Tripwire offers and pricing strategy
    - Content formats and delivery methods
    - Lead nurturing sequence
    - Conversion optimization tactics
    
    Focus on solving the target audience's pain points:
    - Time shortage in hiring
    - Risks of bad hires
    - Need for rapid scaling
    - Compliance concerns
    
    Provide ready-to-implement strategies with expected conversion rates."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content="Create lead magnet strategy for LEGION personnel outsourcing")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Lead magnet strategy generated")
    return response.content

def design_conversion_optimization():
    """Designs conversion optimization strategy"""
    logger.info("⚡ Designing conversion optimization...")
    
    system_prompt = """You are a conversion rate optimization specialist for B2B websites.
    
    Design a comprehensive CRO strategy for LEGION that will:
    1. Optimize form placement and design
    2. Implement psychological triggers
    3. Improve user experience
    4. Maximize lead capture
    
    Include:
    - Form optimization (placement, fields, design)
    - Psychological triggers and persuasion techniques
    - Trust signals and social proof placement
    - Call-to-action optimization
    - User experience improvements
    - A/B testing recommendations
    
    Focus on:
    - Reducing form abandonment
    - Building trust during the visit
    - Creating urgency and scarcity
    - Social proof and authority signals
    
    Provide specific, implementable recommendations with expected conversion improvements."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content="Create CRO strategy for LEGION website")
    ]
    
    response = llm.invoke(messages)
    logger.info("✅ Conversion optimization designed")
    return response.content

if __name__ == "__main__":
    try:
        print("🧠 Starting LEGION Neuromarketing Analysis...\n")
        
        # Step 1: Neuromarketing Strategy Analysis
        neuromarketing_analysis = analyze_neuromarketing_strategy()
        print("=== NEUROMARKETING STRATEGY ANALYSIS ===")
        print(neuromarketing_analysis)
        
        # Step 2: Lead Magnet Strategy
        lead_magnet_strategy = generate_lead_magnet_strategy()
        print("\n=== LEAD MAGNET & TRIPWIRE STRATEGY ===")
        print(lead_magnet_strategy)
        
        # Step 3: Conversion Optimization
        conversion_optimization = design_conversion_optimization()
        print("\n=== CONVERSION OPTIMIZATION STRATEGY ===")
        print(conversion_optimization)
        
        # Save comprehensive results
        with open("legion_neuromarketing_results.txt", "w", encoding="utf-8") as f:
            f.write("=== LEGION NEUROMARKETING ANALYSIS ===\n\n")
            f.write(neuromarketing_analysis)
            f.write("\n\n=== LEAD MAGNET & TRIPWIRE STRATEGY ===\n\n")
            f.write(lead_magnet_strategy)
            f.write("\n\n=== CONVERSION OPTIMIZATION STRATEGY ===\n\n")
            f.write(conversion_optimization)
        
        print("\n💾 Results saved to 'legion_neuromarketing_results.txt'")
        print("\n🎯 LEGION Neuromarketing Analysis completed successfully!")
        print("\n🚀 Ready to implement high-converting lead generation strategy!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
